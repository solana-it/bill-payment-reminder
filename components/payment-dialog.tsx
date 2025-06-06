"use client"

import type React from "react"

import { useState } from "react"
import { CreditCard, Landmark, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Bill {
  id: string
  provider: string
  icon: React.ReactNode
  amount: number
  dueDate: string
  status: "paid" | "due-soon" | "overdue"
  accountNumber: string
}

interface PaymentDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  bill: Bill
}

export function PaymentDialog({ open, onOpenChange, bill }: PaymentDialogProps) {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [loading, setLoading] = useState(false)

  const handlePayment = () => {
    setLoading(true)
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false)
      onOpenChange(false)
      // Here you would update the bill status to "paid"
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Pay Bill</DialogTitle>
          <DialogDescription>
            {bill.provider} - Rs. {bill.amount.toLocaleString()}
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="payment-methods" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
            <TabsTrigger value="bill-details">Bill Details</TabsTrigger>
          </TabsList>
          <TabsContent value="payment-methods">
            <div className="space-y-4 py-4">
              <RadioGroup defaultValue="card" onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-2 rounded-md border p-3">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex flex-1 items-center gap-2 font-normal">
                    <CreditCard className="h-5 w-5" />
                    <div>
                      <p>Credit/Debit Card</p>
                      <p className="text-xs text-muted-foreground">Visa, Mastercard, etc.</p>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-3">
                  <RadioGroupItem value="mobile" id="mobile" />
                  <Label htmlFor="mobile" className="flex flex-1 items-center gap-2 font-normal">
                    <Smartphone className="h-5 w-5" />
                    <div>
                      <p>Mobile Wallet</p>
                      <p className="text-xs text-muted-foreground">Dialog Genie, FriMi, eZ Cash</p>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-3">
                  <RadioGroupItem value="bank" id="bank" />
                  <Label htmlFor="bank" className="flex flex-1 items-center gap-2 font-normal">
                    <Landmark className="h-5 w-5" />
                    <div>
                      <p>Bank Transfer</p>
                      <p className="text-xs text-muted-foreground">Sampath Pay, People's Bank, etc.</p>
                    </div>
                  </Label>
                </div>
              </RadioGroup>

              {paymentMethod === "card" && (
                <div className="space-y-4 pt-4">
                  <div className="grid gap-2">
                    <Label htmlFor="card-name">Name on Card</Label>
                    <Input id="card-name" placeholder="Enter name as on card" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="CVC" />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "mobile" && (
                <div className="space-y-4 pt-4">
                  <div className="grid gap-2">
                    <Label htmlFor="mobile-number">Mobile Number</Label>
                    <Input id="mobile-number" placeholder="07X XXX XXXX" />
                  </div>
                </div>
              )}

              {paymentMethod === "bank" && (
                <div className="space-y-4 pt-4">
                  <div className="grid gap-2">
                    <Label htmlFor="bank-name">Select Bank</Label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="">Select your bank</option>
                      <option value="sampath">Sampath Bank</option>
                      <option value="peoples">People's Bank</option>
                      <option value="commercial">Commercial Bank</option>
                      <option value="hnb">Hatton National Bank</option>
                      <option value="boc">Bank of Ceylon</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="bill-details">
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="font-medium">Provider:</div>
                <div>{bill.provider}</div>

                <div className="font-medium">Account Number:</div>
                <div>{bill.accountNumber}</div>

                <div className="font-medium">Amount:</div>
                <div>Rs. {bill.amount.toLocaleString()}</div>

                <div className="font-medium">Due Date:</div>
                <div>
                  {new Date(bill.dueDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>

                <div className="font-medium">Late Fee:</div>
                <div className="text-red-500">5% after due date</div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        <DialogFooter>
          <Button onClick={handlePayment} disabled={loading}>
            {loading ? "Processing..." : `Pay Rs. ${bill.amount.toLocaleString()}`}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

