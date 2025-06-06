"use client"

import { useState } from "react"
import { BarChart, Calendar, DollarSign, DropletIcon, LightbulbIcon, PlusCircle, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BillCard } from "@/components/bill-card"
import { AddBillDialog } from "@/components/add-bill-dialog"
import { BillHistory } from "@/components/bill-history"
import { SpendingChart } from "@/components/spending-chart"

export function DashboardView() {
  const [showAddBill, setShowAddBill] = useState(false)

  // Sample data for demonstration
  const upcomingBills = [
    {
      id: "1",
      provider: "Ceylon Electricity Board (CEB)",
      icon: <LightbulbIcon className="h-5 w-5" />,
      amount: 3500,
      dueDate: "2025-03-25",
      status: "due-soon", // paid, due-soon, overdue
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

  const recentBills = [
    {
      id: "4",
      provider: "Ceylon Electricity Board (CEB)",
      icon: <LightbulbIcon className="h-5 w-5" />,
      amount: 3200,
      dueDate: "2025-02-25",
      status: "paid",
      accountNumber: "CEB-123456789",
      paidDate: "2025-02-23",
    },
    {
      id: "5",
      provider: "National Water Supply & Drainage Board",
      icon: <DropletIcon className="h-5 w-5" />,
      amount: 1650,
      dueDate: "2025-02-28",
      status: "paid",
      accountNumber: "NWSDB-987654321",
      paidDate: "2025-02-26",
    },
  ]

  return (
    <div className="container py-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">Manage your utility bills and payments in one place.</p>
        </div>
        <Button onClick={() => setShowAddBill(true)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Bill
        </Button>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Due</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rs. 7,500</div>
            <p className="text-xs text-muted-foreground">3 bills pending payment</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Due Date</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">March 20, 2025</div>
            <p className="text-xs text-muted-foreground">Dialog Internet (Overdue)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Spending</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rs. 7,500</div>
            <p className="text-xs text-muted-foreground">+5.2% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upcoming" className="mt-6">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Bills</TabsTrigger>
          <TabsTrigger value="history">Payment History</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {upcomingBills.map((bill) => (
              <BillCard key={bill.id} bill={bill} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="history">
          <BillHistory bills={[...upcomingBills, ...recentBills]} />
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Spending Trends</CardTitle>
              <CardDescription>Track your utility expenses over time</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <SpendingChart />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <AddBillDialog open={showAddBill} onOpenChange={setShowAddBill} />
    </div>
  )
}

