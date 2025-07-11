"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle2, ChevronLeft, Copy, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { verifyZarinpalPayment } from "@/lib/zarinpal"

export default function DonationSuccessPage() {
  const searchParams = useSearchParams()
  const [verificationStatus, setVerificationStatus] = useState<"loading" | "success" | "error">("loading")
  const [paymentDetails, setPaymentDetails] = useState<{
    refId: string
    amount: number
  } | null>(null)

  const authority = searchParams.get("Authority")
  const status = searchParams.get("Status")

  useEffect(() => {
    async function verifyPayment() {
      if (!authority || status !== "OK") {
        setVerificationStatus("error")
        return
      }

      try {
        const result = await verifyZarinpalPayment(authority)

        if (result.success) {
          setVerificationStatus("success")
          setPaymentDetails({
            refId: result.refId,
            amount: result.amount,
          })
        } else {
          setVerificationStatus("error")
        }
      } catch (error) {
        console.error("Payment verification error:", error)
        setVerificationStatus("error")
      }
    }

    verifyPayment()
  }, [authority, status])

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("کد پیگیری کپی شد")
      })
      .catch((err) => {
        console.error("Failed to copy: ", err)
      })
  }

  const sharePayment = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "کمک مالی به Swab the World",
          text: `من مبلغ ${paymentDetails?.amount.toLocaleString()} تومان به Swab the World کمک کردم. شما هم می‌توانید کمک کنید!`,
          url: window.location.origin + "/donate",
        })
        .catch((error) => console.log("Error sharing", error))
    } else {
      alert("مرورگر شما از قابلیت اشتراک‌گذاری پشتیبانی نمی‌کند")
    }
  }

  return (
    <div className="container mx-auto py-10 px-4 md:px-6 lg:py-16 rtl">
      <div className="max-w-md mx-auto">
        {verificationStatus === "loading" && (
          <Card>
            <CardHeader className="text-center">
              <CardTitle>در حال تایید پرداخت</CardTitle>
              <CardDescription>لطفا صبر کنید، در حال تایید پرداخت شما هستیم...</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center py-6">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </CardContent>
          </Card>
        )}

        {verificationStatus === "success" && paymentDetails && (
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="h-16 w-16 text-green-500" />
              </div>
              <CardTitle>پرداخت با موفقیت انجام شد</CardTitle>
              <CardDescription>از کمک سخاوتمندانه شما سپاسگزاریم!</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">مبلغ پرداختی:</span>
                  <span className="font-medium">{paymentDetails.amount.toLocaleString()} تومان</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">کد پیگیری:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{paymentDetails.refId}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => copyToClipboard(paymentDetails.refId)}
                    >
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">کپی کد پیگیری</span>
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">تاریخ:</span>
                  <span className="font-medium">{new Date().toLocaleDateString("fa-IR")}</span>
                </div>
              </div>

              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">رسید پرداخت به ایمیل شما ارسال خواهد شد.</p>
                <p className="text-sm font-medium">کمک شما به نجات جان انسان‌ها کمک می‌کند!</p>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-3">
              <Button className="w-full" variant="outline" onClick={sharePayment}>
                <Share2 className="mr-2 h-4 w-4" />
                اشتراک‌گذاری
              </Button>

              <Button asChild className="w-full">
                <Link href="/">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  بازگشت به صفحه اصلی
                </Link>
              </Button>
            </CardFooter>
          </Card>
        )}

        {verificationStatus === "error" && (
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-red-500">خطا در تایید پرداخت</CardTitle>
              <CardDescription>متأسفانه مشکلی در تایید پرداخت شما به وجود آمد.</CardDescription>
            </CardHeader>

            <CardContent className="text-center">
              <p className="mb-4">
                اگر مبلغی از حساب شما کسر شده است، طی 72 ساعت آینده به حساب شما بازگردانده خواهد شد.
              </p>
              <p className="text-sm text-muted-foreground">در صورت بروز هرگونه مشکل، با پشتیبانی ما تماس بگیرید.</p>
            </CardContent>

            <CardFooter className="flex flex-col gap-3">
              <Button asChild variant="outline" className="w-full">
                <Link href="/donate">تلاش مجدد</Link>
              </Button>

              <Button asChild className="w-full">
                <Link href="/">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  بازگشت به صفحه اصلی
                </Link>
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}
