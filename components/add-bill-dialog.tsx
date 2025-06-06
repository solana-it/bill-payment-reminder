"use client"

import type React from "react"

import { useState } from "react"
import { CalendarIcon, DropletIcon, LightbulbIcon, Wifi, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

interface AddBillDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddBillDialog({ open, onOpenChange }: AddBillDialogProps) {
  const [date, setDate] = useState<Date>()
  const [provider, setProvider] = useState("")
  const [billType, setBillType] = useState("utility")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would add the bill to your state or database
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Bill</DialogTitle>
          <DialogDescription>Enter the details of your bill to track and receive reminders.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="bill-type">Bill Type</Label>
              <Select value={billType} onValueChange={setBillType}>
                <SelectTrigger id="bill-type">
                  <SelectValue placeholder="Select bill type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="utility">Utility Bill</SelectItem>
                  <SelectItem value="credit-card">Credit Card</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="provider">Provider</Label>
              <Select value={provider} onValueChange={setProvider}>
                <SelectTrigger id="provider">
                  <SelectValue placeholder="Select provider" />
                </SelectTrigger>
                <SelectContent>
                  {billType === "utility" ? (
                    <>
                      <SelectItem value="ceb">
                        <div className="flex items-center">
                          <LightbulbIcon className="mr-2 h-4 w-4" />
                          <span>Ceylon Electricity Board (CEB)</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="leco">
                        <div className="flex items-center">
                          <LightbulbIcon className="mr-2 h-4 w-4" />
                          <span>Lanka Electricity Company (LECO)</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="nwsdb">
                        <div className="flex items-center">
                          <DropletIcon className="mr-2 h-4 w-4" />
                          <span>National Water Supply & Drainage Board</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="dialog">
                        <div className="flex items-center">
                          <Wifi className="mr-2 h-4 w-4" />
                          <span>Dialog Internet</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="slt">
                        <div className="flex items-center">
                          <Wifi className="mr-2 h-4 w-4" />
                          <span>SLT Internet</span>
                        </div>
                      </SelectItem>
                    </>
                  ) : (
                    <>
                      <SelectItem value="sampath-visa">
                        <div className="flex items-center">
                          <CreditCard className="mr-2 h-4 w-4" />
                          <span>Sampath Bank Visa</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="commercial-mc">
                        <div className="flex items-center">
                          <CreditCard className="mr-2 h-4 w-4" />
                          <span>Commercial Bank Mastercard</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="hnb-visa">
                        <div className="flex items-center">
                          <CreditCard className="mr-2 h-4 w-4" />
                          <span>HNB Visa</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="boc-mc">
                        <div className="flex items-center">
                          <CreditCard className="mr-2 h-4 w-4" />
                          <span>BOC Mastercard</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="amex">
                        <div className="flex items-center">
                          <CreditCard className="mr-2 h-4 w-4" />
                          <span>American Express</span>
                        </div>
                      </SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="account">
                {billType === "utility" ? "Account Number" : "Card Number (last 4 digits)"}
              </Label>
              <Input
                id="account"
                placeholder={billType === "utility" ? "Enter your account number" : "Enter last 4 digits"}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="amount">Amount (Rs.)</Label>
              <Input id="amount" type="number" placeholder="0.00" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dueDate">Due Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Select due date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="reminder">Reminder</Label>
              <Select defaultValue="3">
                <SelectTrigger id="reminder">
                  <SelectValue placeholder="Select reminder" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 day before</SelectItem>
                  <SelectItem value="3">3 days before</SelectItem>
                  <SelectItem value="7">7 days before</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add Bill</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

