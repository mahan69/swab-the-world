"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import NextImage from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CalendarHeart, CreditCard, Heart, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { initiateZarinpalPayment } from "@/lib/zarinpal"

// Form schema
const formSchema = z.object({
  amount: z.coerce.number().min(10000, "مبلغ اهدایی باید حداقل 10,000 تومان باشد"),
  donationType: z.enum(["one-time", "monthly", "quarterly", "yearly"], {
    required_error: "لطفا نوع اهدا را انتخاب کنید",
  }),
  name: z.string().optional(),
  email: z.string().email("ایمیل نامعتبر است"),
  phone: z.string().min(10, "شماره تماس نامعتبر است"),
  message: z.string().optional(),
  isAnonymous: z.boolean().optional(),
})

export default function DonatePage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100000)

  // Define donation amounts
  const donationAmounts = [
    { value: 50000, label: "50,000 تومان" },
    { value: 100000, label: "100,000 تومان" },
    { value: 200000, label: "200,000 تومان" },
    { value: 500000, label: "500,000 تومان" },
    { value: 1000000, label: "1,000,000 تومان" },
  ]

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 100000,
      donationType: "one-time",
      name: "",
      email: "",
      phone: "",
      message: "",
      isAnonymous: false,
    },
  })

  // Handle form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true)

      // Initiate payment with ZarinPal
      const result = await initiateZarinpalPayment(values)

      if (result.success && result.url) {
        // Redirect to ZarinPal payment page
        window.location.href = result.url
      } else {
        throw new Error("خطا در اتصال به درگاه پرداخت")
      }
    } catch (error) {
      console.error("Payment error:", error)
      alert(error instanceof Error ? error.message : "خطا در پردازش پرداخت")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle amount selection
  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    form.setValue("amount", amount)
  }

  return (
    <div className="container mx-auto py-10 px-4 md:px-6 lg:py-16 rtl">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">حمایت از ماموریت ما</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          کمک مالی شما به ما امکان می‌دهد تا به افزایش آگاهی درباره اهدای سلول‌های بنیادی و گسترش پایگاه داده اهداکنندگان
          ادامه دهیم.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="lg:col-span-2">
          <Tabs defaultValue="donate" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="donate">اهدای کمک مالی</TabsTrigger>
              <TabsTrigger value="info">اطلاعات بیشتر</TabsTrigger>
            </TabsList>

            <TabsContent value="donate">
              <Card>
                <CardHeader>
                  <CardTitle>اهدای کمک مالی</CardTitle>
                  <CardDescription>لطفا مبلغ و نوع کمک مالی خود را انتخاب کنید.</CardDescription>
                </CardHeader>

                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Donation Amount */}
                      <div className="space-y-4">
                        <label className="text-sm font-medium">مبلغ اهدایی</label>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {donationAmounts.map((amount) => (
                            <Button
                              key={amount.value}
                              type="button"
                              variant={selectedAmount === amount.value ? "default" : "outline"}
                              onClick={() => handleAmountSelect(amount.value)}
                              className="h-12"
                            >
                              {amount.label}
                            </Button>
                          ))}

                          <div className="col-span-2 md:col-span-3">
                            <FormField
                              control={form.control}
                              name="amount"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>مبلغ دلخواه (تومان)</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="number"
                                      placeholder="مبلغ دلخواه"
                                      {...field}
                                      onChange={(e) => {
                                        field.onChange(e)
                                        setSelectedAmount(null)
                                      }}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Donation Type */}
                      <FormField
                        control={form.control}
                        name="donationType"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>نوع اهدا</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <FormItem className="flex items-center space-x-3 space-x-reverse">
                                  <FormControl>
                                    <RadioGroupItem value="one-time" />
                                  </FormControl>
                                  <FormLabel className="font-normal">یکبار</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-x-reverse">
                                  <FormControl>
                                    <RadioGroupItem value="monthly" />
                                  </FormControl>
                                  <FormLabel className="font-normal">ماهانه</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-x-reverse">
                                  <FormControl>
                                    <RadioGroupItem value="quarterly" />
                                  </FormControl>
                                  <FormLabel className="font-normal">سه ماهه</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-x-reverse">
                                  <FormControl>
                                    <RadioGroupItem value="yearly" />
                                  </FormControl>
                                  <FormLabel className="font-normal">سالانه</FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">اطلاعات شخصی</h3>

                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>نام (اختیاری)</FormLabel>
                              <FormControl>
                                <Input placeholder="نام و نام خانوادگی" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>ایمیل</FormLabel>
                                <FormControl>
                                  <Input placeholder="ایمیل" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>شماره تماس</FormLabel>
                                <FormControl>
                                  <Input placeholder="شماره تماس" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>پیام (اختیاری)</FormLabel>
                              <FormControl>
                                <Textarea placeholder="پیام شما" className="resize-none" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="isAnonymous"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-x-reverse">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>می‌خواهم کمک مالی من ناشناس باشد</FormLabel>
                                <FormDescription>نام شما در لیست اهداکنندگان نمایش داده نخواهد شد.</FormDescription>
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "در حال پردازش..." : "پرداخت با زرین‌پال"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>

                <CardFooter className="flex justify-center border-t pt-6">
                  <div className="flex items-center">
                    <NextImage
                      src="/placeholder.svg?height=40&width=120"
                      alt="زرین‌پال"
                      width={120}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="info">
              <Card>
                <CardHeader>
                  <CardTitle>کمک مالی شما چگونه استفاده می‌شود</CardTitle>
                  <CardDescription>هر کمک مالی، بدون توجه به مقدار آن، تأثیر بزرگی دارد.</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                      <div className="bg-primary/10 p-3 rounded-full mb-4">
                        <CalendarHeart className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">رویدادهای ثبت‌نام اهداکنندگان</h3>
                      <p className="text-sm text-muted-foreground">
                        برگزاری رویدادهای ثبت‌نام اهداکنندگان در سراسر کشور برای افزایش تعداد اهداکنندگان بالقوه.
                      </p>
                    </div>

                    <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                      <div className="bg-primary/10 p-3 rounded-full mb-4">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">آموزش و آگاهی‌رسانی</h3>
                      <p className="text-sm text-muted-foreground">
                        توسعه مواد آموزشی و برنامه‌های آگاهی‌رسانی برای آموزش مردم درباره اهمیت اهدای سلول‌های بنیادی.
                      </p>
                    </div>

                    <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                      <div className="bg-primary/10 p-3 rounded-full mb-4">
                        <Heart className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">حمایت از بیماران</h3>
                      <p className="text-sm text-muted-foreground">
                        ارائه منابع و پشتیبانی به بیمارانی که به دنبال اهداکننده سلول‌های بنیادی هستند.
                      </p>
                    </div>

                    <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                      <div className="bg-primary/10 p-3 rounded-full mb-4">
                        <CreditCard className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">تحقیق و توسعه</h3>
                      <p className="text-sm text-muted-foreground">
                        سرمایه‌گذاری در تحقیقات برای بهبود فرآیندهای تطبیق و پیوند سلول‌های بنیادی.
                      </p>
                    </div>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-lg font-medium mb-4">گزارش مالی و شفافیت</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      ما متعهد به شفافیت کامل در مورد نحوه استفاده از کمک‌های مالی هستیم. گزارش‌های مالی سالانه ما در
                      دسترس عموم قرار دارد.
                    </p>
                    <Button variant="outline" className="w-full">
                      مشاهده گزارش مالی سالانه
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>سوالات متداول</CardTitle>
              <CardDescription>پاسخ به سوالات رایج درباره کمک‌های مالی</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">آیا کمک مالی من مشمول معافیت مالیاتی می‌شود؟</h3>
                <p className="text-sm text-muted-foreground">
                  بله، ما یک سازمان غیرانتفاعی ثبت‌شده هستیم و کمک‌های مالی شما مشمول معافیت مالیاتی است.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-1">آیا می‌توانم کمک مالی خود را به یک برنامه خاص اختصاص دهم؟</h3>
                <p className="text-sm text-muted-foreground">
                  بله، می‌توانید در قسمت پیام مشخص کنید که مایلید کمک مالی شما به کدام برنامه اختصاص یابد.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-1">آیا می‌توانم کمک مالی ماهانه خود را لغو کنم؟</h3>
                <p className="text-sm text-muted-foreground">
                  بله، می‌توانید در هر زمان با ورود به حساب کاربری خود یا تماس با ما، کمک مالی ماهانه خود را لغو کنید.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-1">آیا روش‌های دیگری برای کمک وجود دارد؟</h3>
                <p className="text-sm text-muted-foreground">
                  بله، علاوه بر کمک مالی، می‌توانید با داوطلب شدن، اهدای سلول‌های بنیادی، یا سازماندهی رویدادهای جمع‌آوری
                  کمک مالی به ما کمک کنید.
                </p>
              </div>
            </CardContent>

            <CardFooter>
              <Button variant="outline" className="w-full">
                مشاهده همه سوالات متداول
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
