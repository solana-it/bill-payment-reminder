import { LoginForm } from "@/components/login-form"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Bill Payment Reminder</h1>
          <p className="mt-2 text-sm text-muted-foreground">Sign in to your account to manage your bills</p>
        </div>
        <LoginForm />
        <div className="text-center text-sm">
          <p>
            Don't have an account?{" "}
            <Link href="/signup" className="font-medium text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

