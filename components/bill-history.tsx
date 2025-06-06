"use client"

import type React from "react"

import { useState } from "react"
import { format } from "date-fns"
import { CheckCircle, Clock, AlertCircle, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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

interface BillHistoryProps {
  bills: Bill[]
}

export function BillHistory({ bills }: BillHistoryProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredBills = bills.filter((bill) => {
    const matchesSearch =
      bill.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bill.accountNumber.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || bill.status === statusFilter
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "due-soon":
        return <Clock className="h-5 w-5 text-amber-500" />
      case "overdue":
        return <AlertCircle className="h-5 w-5 text-red-500" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search bills..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Bills</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="due-soon">Due Soon</SelectItem>
            <SelectItem value="overdue">Overdue</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Provider</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Paid Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBills.length > 0 ? (
              filteredBills.map((bill) => (
                <TableRow key={bill.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      {bill.icon}
                      <span>{bill.provider}</span>
                    </div>
                  </TableCell>
                  <TableCell>Rs. {bill.amount.toLocaleString()}</TableCell>
                  <TableCell>{format(new Date(bill.dueDate), "MMM d, yyyy")}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {getStatusIcon(bill.status)}
                      <span
                        className={
                          bill.status === "paid"
                            ? "text-green-500"
                            : bill.status === "due-soon"
                              ? "text-amber-500"
                              : "text-red-500"
                        }
                      >
                        {bill.status === "paid" ? "Paid" : bill.status === "due-soon" ? "Due Soon" : "Overdue"}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{bill.paidDate ? format(new Date(bill.paidDate), "MMM d, yyyy") : "-"}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No bills found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

