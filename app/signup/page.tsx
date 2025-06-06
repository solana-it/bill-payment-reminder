import { SignupForm } from "@/components/signup-form"
import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Bill Payment Reminder</h1>
          <p className="mt-2 text-sm text-muted-foreground">Create an account to start managing your bills</p>
        </div>
        <SignupForm />
        <div className="text-center text-sm">
          <p>
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

