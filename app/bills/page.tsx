import { MyBillsView } from "@/components/my-bills-view"

export default function BillsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">Bill Payment Reminder</h1>
          </div>
          <nav className="flex items-center gap-4">
            <a href="/" className="text-sm font-medium text-muted-foreground">
              Dashboard
            </a>
            <a href="/bills" className="text-sm font-medium">
              My Bills
            </a>
            <a href="/analytics" className="text-sm font-medium text-muted-foreground">
              Analytics
            </a>
            <a href="/settings" className="text-sm font-medium text-muted-foreground">
              Settings
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <MyBillsView />
      </main>
      <footer className="border-t py-4">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Bill Payment Reminder. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="/terms" className="text-sm text-muted-foreground">
              Terms
            </a>
            <a href="/privacy" className="text-sm text-muted-foreground">
              Privacy
            </a>
            <a href="/contact" className="text-sm text-muted-foreground">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

