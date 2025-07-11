"use server"

import { z } from "zod"

// Define environment variables for ZarinPal
const ZARINPAL_MERCHANT_ID = process.env.ZARINPAL_MERCHANT_ID || "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
const ZARINPAL_CALLBACK_URL = process.env.ZARINPAL_CALLBACK_URL || "https://your-website.com/donate/success"
const ZARINPAL_API_URL = "https://api.zarinpal.com/pg/v4/payment"
const ZARINPAL_GATEWAY_URL = "https://www.zarinpal.com/pg/StartPay"

// Donation data schema
const donationSchema = z.object({
  amount: z.number().min(10000, "مبلغ اهدایی باید حداقل 10,000 تومان باشد"),
  donationType: z.enum(["one-time", "monthly", "quarterly", "yearly"]),
  name: z.string().optional(),
  email: z.string().email("ایمیل نامعتبر است"),
  phone: z.string().min(10, "شماره تماس نامعتبر است"),
  message: z.string().optional(),
  isAnonymous: z.boolean().optional(),
})

type DonationData = z.infer<typeof donationSchema>

/**
 * Initiates a payment request to ZarinPal
 */
export async function initiateZarinpalPayment(donationData: DonationData) {
  try {
    // Validate donation data
    const validatedData = donationSchema.parse(donationData)

    // Prepare request data for ZarinPal
    const requestData = {
      merchant_id: ZARINPAL_MERCHANT_ID,
      amount: validatedData.amount,
      callback_url: ZARINPAL_CALLBACK_URL,
      description: `کمک مالی ${
        validatedData.donationType === "one-time"
          ? "یکبار"
          : validatedData.donationType === "monthly"
            ? "ماهانه"
            : validatedData.donationType === "quarterly"
              ? "سه ماهه"
              : "سالانه"
      }`,
      metadata: {
        email: validatedData.email,
        phone: validatedData.phone,
        name: validatedData.name || "ناشناس",
        message: validatedData.message || "",
        donation_type: validatedData.donationType,
        is_anonymous: validatedData.isAnonymous || false,
      },
    }

    // Make request to ZarinPal API
    const response = await fetch(`${ZARINPAL_API_URL}/request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })

    const result = await response.json()

    // Check if request was successful
    if (result.data && result.data.code === 100) {
      // Return payment URL
      return {
        success: true,
        url: `${ZARINPAL_GATEWAY_URL}/${result.data.authority}`,
        authority: result.data.authority,
      }
    } else {
      throw new Error(`خطا در اتصال به درگاه پرداخت: ${result.errors?.message || "خطای نامشخص"}`)
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(error.errors[0].message)
    }

    if (error instanceof Error) {
      throw error
    }

    throw new Error("خطا در اتصال به درگاه پرداخت")
  }
}

/**
 * Verifies a payment with ZarinPal
 */
export async function verifyZarinpalPayment(authority: string) {
  try {
    // Get payment amount from database or session based on authority
    // For this example, we'll use a mock amount
    const amount = 100000 // This should be retrieved from your database based on the authority

    // Prepare verification data
    const verificationData = {
      merchant_id: ZARINPAL_MERCHANT_ID,
      authority,
      amount,
    }

    // Make request to ZarinPal API
    const response = await fetch(`${ZARINPAL_API_URL}/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(verificationData),
    })

    const result = await response.json()

    // Check if verification was successful
    if (result.data && result.data.code === 100) {
      // Payment was successful
      return {
        success: true,
        refId: result.data.ref_id,
        amount,
      }
    } else {
      throw new Error(`تایید پرداخت ناموفق بود: ${result.errors?.message || "خطای نامشخص"}`)
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error
    }

    throw new Error("خطا در تایید پرداخت")
  }
}
