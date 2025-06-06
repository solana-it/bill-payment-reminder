"use client"

import type React from "react"

import { useState } from "react"
import { format, differenceInDays } from "date-fns"
import { AlertCircle, CheckCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { PaymentDialog } from "@/components/payment-dialog"

interface Bill {
  id: string
  provider: string
  icon: React.ReactNode
  amount: number
  dueDate: string
  status: "paid" | "due-soon" | "overdue"
  accountNumber: string
  paidDate?: string
}

interface BillCardProps {
  bill: Bill
}

export function BillCard({ bill }: BillCardProps) {
  const [showDetails, setShowDetails] = useState(false)
  const [showPayment, setShowPayment] = useState(false)

  const dueDate = new Date(bill.dueDate)
  const formattedDueDate = format(dueDate, "MMMM d, yyyy")
  const daysUntilDue = differenceInDays(dueDate, new Date())

  const getStatusInfo = () => {
    switch (bill.status) {
      case "paid":
        return {
          icon: <CheckCircle className="h-5 w-5 text-green-500" />,
          text: "Paid",
          color: "text-green-500",
          bgColor: "bg-green-50",
        }
      case "overdue":
        return {
          icon: <AlertCircle className="h-5 w-5 text-red-500" />,
          text: "Overdue",
          color: "text-red-500",
          bgColor: "bg-red-50",
        }
      case "due-soon":
        return {
          icon: <Clock className="h-5 w-5 text-amber-500" />,
          text: daysUntilDue <= 0 ? "Due Today" : `Due in ${daysUntilDue} days`,
          color: "text-amber-500",
          bgColor: "bg-amber-50",
        }
      default:
        return {
          icon: <Clock className="h-5 w-5 text-gray-500" />,
          text: "Unknown",
          color: "text-gray-500",
          bgColor: "bg-gray-50",
        }
    }
  }

  const statusInfo = getStatusInfo()

  return (
    <>
      <Card className="overflow-hidden">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-medium">{bill.provider}</CardTitle>
            {bill.icon}
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex justify-between">
            <div>
              <p className="text-2xl font-bold">Rs. {bill.amount.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Due: {formattedDueDate}</p>
            </div>
            <div
              className={`flex items-center rounded-full px-2 py-1 text-xs ${statusInfo.bgColor} ${statusInfo.color}`}
            >
              {statusInfo.icon}
              <span className="ml-1">{statusInfo.text}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-2">
          <Button variant="outline" size="sm" onClick={() => setShowDetails(true)}>
            Details
          </Button>
          {bill.status !== "paid" && (
            <Button size="sm" onClick={() => setShowPayment(true)}>
              Pay Now
            </Button>
          )}
        </CardFooter>
      </Card>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Bill Details</DialogTitle>
            <DialogDescription>{bill.provider}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="font-medium">Account Number:</div>
              <div>{bill.accountNumber}</div>

              <div className="font-medium">Amount:</div>
              <div>Rs. {bill.amount.toLocaleString()}</div>

              <div className="font-medium">Due Date:</div>
              <div>{formattedDueDate}</div>

              <div className="font-medium">Status:</div>
              <div className={statusInfo.color}>{statusInfo.text}</div>

              {bill.paidDate && (
                <>
                  <div className="font-medium">Paid Date:</div>
                  <div>{format(new Date(bill.paidDate), "MMMM d, yyyy")}</div>
                </>
              )}
            </div>
          </div>
          <DialogFooter>
            {bill.status !== "paid" && (
              <Button
                onClick={() => {
                  setShowDetails(false)
                  setShowPayment(true)
                }}
              >
                Pay Now
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <PaymentDialog open={showPayment} onOpenChange={setShowPayment} bill={bill} />
    </>
  )
}

