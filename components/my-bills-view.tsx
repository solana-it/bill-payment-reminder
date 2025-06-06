"use client"

import { useState } from "react"
import { PlusCircle, CreditCard, LightbulbIcon, DropletIcon, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BillCard } from "@/components/bill-card"
import { AddBillDialog } from "@/components/add-bill-dialog"
import { BillHistory } from "@/components/bill-history"

export function MyBillsView() {
  const [showAddBill, setShowAddBill] = useState(false)

  // Sample data for demonstration
  const utilityBills = [
    {
      id: "1",
      provider: "Ceylon Electricity Board (CEB)",
      icon: <LightbulbIcon className="h-5 w-5" />,
      amount: 3500,
      dueDate: "2025-03-25",
      status: "due-soon",
      accountNumber: "CEB-123456789",
    },
    {
      id: "2",
      provider: "National Water Supply & Drainage Board",
      icon: <DropletIcon className="h-5 w-5" />,
      amount: 1800,
      dueDate: "2025-03-28",
      status: "due-soon",
      accountNumber: "NWSDB-987654321",
    },
    {
      id: "3",
      provider: "Dialog Internet",
      icon: <Wifi className="h-5 w-5" />,
      amount: 2200,
      dueDate: "2025-03-20",
      status: "overdue",
      accountNumber: "DLG-456789123",
    },
  ]

  const creditCardBills = [
    {
      id: "4",
      provider: "Sampath Bank Visa",
      icon: <CreditCard className="h-5 w-5" />,
      amount: 15000,
      dueDate: "2025-03-15",
      status: "overdue",
      accountNumber: "VISA-xxxx-xxxx-1234",
    },
    {
      id: "5",
      provider: "Commercial Bank Mastercard",
      icon: <CreditCard className="h-5 w-5" />,
      amount: 8500,
      dueDate: "2025-03-30",
      status: "due-soon",
      accountNumber: "MC-xxxx-xxxx-5678",
    },
  ]

  const paidBills = [
    {
      id: "6",
      provider: "Ceylon Electricity Board (CEB)",
      icon: <LightbulbIcon className="h-5 w-5" />,
      amount: 3200,
      dueDate: "2025-02-25",
      status: "paid",
      accountNumber: "CEB-123456789",
      paidDate: "2025-02-23",
    },
    {
      id: "7",
      provider: "Sampath Bank Visa",
      icon: <CreditCard className="h-5 w-5" />,
      amount: 12500,
      dueDate: "2025-02-15",
      status: "paid",
      accountNumber: "VISA-xxxx-xxxx-1234",
      paidDate: "2025-02-10",
    },
  ]

  return (
    <div className="container py-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">My Bills</h2>
          <p className="text-muted-foreground">View and manage all your bills in one place.</p>
        </div>
        <Button onClick={() => setShowAddBill(true)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Bill
        </Button>
      </div>

      <Tabs defaultValue="all" className="mt-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Bills</TabsTrigger>
          <TabsTrigger value="utility">Utility Bills</TabsTrigger>
          <TabsTrigger value="credit-card">Credit Cards</TabsTrigger>
          <TabsTrigger value="paid">Paid Bills</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[...utilityBills, ...creditCardBills].map((bill) => (
              <BillCard key={bill.id} bill={bill} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="utility" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {utilityBills.map((bill) => (
              <BillCard key={bill.id} bill={bill} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="credit-card" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {creditCardBills.map((bill) => (
              <BillCard key={bill.id} bill={bill} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="paid" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {paidBills.map((bill) => (
              <BillCard key={bill.id} bill={bill} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Bill History</CardTitle>
          <CardDescription>View and search your bill payment history</CardDescription>
        </CardHeader>
        <CardContent>
          <BillHistory bills={[...utilityBills, ...creditCardBills, ...paidBills]} />
        </CardContent>
      </Card>

      <AddBillDialog open={showAddBill} onOpenChange={setShowAddBill} />
    </div>
  )
}

