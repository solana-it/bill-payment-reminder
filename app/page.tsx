import Link from "next/link"
import { DashboardView } from "@/components/dashboard-view"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">Bill Payment Reminder</h1>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium">
              Dashboard
            </Link>
            <Link href="/bills" className="text-sm font-medium text-muted-foreground">
              My Bills
            </Link>
            <Link href="/analytics" className="text-sm font-medium text-muted-foreground">
              Analytics
            </Link>
            <Link href="/settings" className="text-sm font-medium text-muted-foreground">
              Settings
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <DashboardView />
      </main>
      <footer className="border-t py-4">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Bill Payment Reminder. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

