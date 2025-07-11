import Link from "next/link"
import { AlertCircle, ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function DonationCancelPage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6 lg:py-16 rtl">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <AlertCircle className="h-16 w-16 text-amber-500" />
            </div>
            <CardTitle>پرداخت لغو شد</CardTitle>
            <CardDescription>شما پرداخت خود را لغو کردید.</CardDescription>
          </CardHeader>

          <CardContent className="text-center">
            <p className="mb-4">هیچ مبلغی از حساب شما کسر نشده است.</p>
            <p className="text-sm text-muted-foreground">
              اگر مایل به کمک در زمان دیگری هستید، می‌توانید مجدداً به صفحه اهدا مراجعه کنید.
            </p>
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            <Button asChild variant="outline" className="w-full">
              <Link href="/donate">بازگشت به صفحه اهدا</Link>
            </Button>

            <Button asChild className="w-full">
              <Link href="/">
                <ChevronLeft className="mr-2 h-4 w-4" />
                بازگشت به صفحه اصلی
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
