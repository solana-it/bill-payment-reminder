"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SpendingChart } from "@/components/spending-chart"
import { CategoryPieChart } from "@/components/category-pie-chart"
import { MonthlyComparisonChart } from "@/components/monthly-comparison-chart"
import { BillTrendChart } from "@/components/bill-trend-chart"

export function AnalyticsView() {
  const [timeRange, setTimeRange] = useState("6months")

  return (
    <div className="container py-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
          <p className="text-muted-foreground">Track and analyze your spending patterns.</p>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3months">Last 3 months</SelectItem>
            <SelectItem value="6months">Last 6 months</SelectItem>
            <SelectItem value="1year">Last 1 year</SelectItem>
            <SelectItem value="custom">Custom range</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rs. 45,000</div>
            <p className="text-xs text-muted-foreground">Last 6 months</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Monthly Average</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rs. 7,500</div>
            <p className="text-xs text-muted-foreground">+5.2% from previous period</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Highest Bill</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rs. 15,000</div>
            <p className="text-xs text-muted-foreground">Sampath Bank Visa (Mar 2025)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">On-time Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">15 of 18 bills paid on time</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="mt-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="by-category">By Category</TabsTrigger>
          <TabsTrigger value="comparison">Monthly Comparison</TabsTrigger>
          <TabsTrigger value="trends">Bill Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Spending Overview</CardTitle>
              <CardDescription>Track your total spending across all bill categories</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <SpendingChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="by-category">
          <Card>
            <CardHeader>
              <CardTitle>Spending by Category</CardTitle>
              <CardDescription>Breakdown of your spending by bill category</CardDescription>
            </CardHeader>
            <CardContent>
              <CategoryPieChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comparison">
          <Card>
            <CardHeader>
              <CardTitle>Month-to-Month Comparison</CardTitle>
              <CardDescription>Compare your spending across different months</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <MonthlyComparisonChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle>Bill Payment Trends</CardTitle>
              <CardDescription>Track how your bills have changed over time</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <BillTrendChart />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Spending Insights</CardTitle>
            <CardDescription>Smart analysis of your spending patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-amber-500 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M12 16v-4M12 8h.01" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Your electricity bill has increased by 15% this month</p>
                  <p className="text-sm text-muted-foreground">
                    Consider checking for appliances that might be using more power.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-green-500 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Your water bill has decreased by 8% compared to last month</p>
                  <p className="text-sm text-muted-foreground">Great job on water conservation!</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-blue-500 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6M9 9l6 6" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">You've paid Rs. 2,500 in late fees over the past 6 months</p>
                  <p className="text-sm text-muted-foreground">
                    Setting up automatic payments could help you avoid these fees.
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Saving Opportunities</CardTitle>
            <CardDescription>Ways to reduce your monthly expenses</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-green-500 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Switch to a lower-tier internet plan</p>
                  <p className="text-sm text-muted-foreground">
                    Based on your usage, you could save Rs. 500/month with Dialog's 25Mbps plan.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-green-500 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Consolidate credit card debt</p>
                  <p className="text-sm text-muted-foreground">
                    Transfer your balance to a lower interest card to save on interest payments.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-green-500 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Install energy-efficient bulbs</p>
                  <p className="text-sm text-muted-foreground">
                    LED bulbs could reduce your electricity bill by up to 10%.
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

