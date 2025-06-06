"use client"

import { useState } from "react"
import { Bell, CreditCard, Mail, Phone, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SettingsView() {
  const [language, setLanguage] = useState("english")

  return (
    <div className="container py-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">Manage your account preferences and settings.</p>
        </div>
      </div>

      <Tabs defaultValue="profile" className="mt-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                  <User className="h-10 w-10 text-muted-foreground" />
                </div>
                <Button variant="outline">Change Avatar</Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" defaultValue="John" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" defaultValue="Doe" />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="+94 71 234 5678" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" defaultValue="123 Main St, Colombo" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Customize how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notification Channels</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <Label htmlFor="email-notifications" className="font-normal">
                      Email Notifications
                    </Label>
                  </div>
                  <Switch id="email-notifications" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <Label htmlFor="sms-notifications" className="font-normal">
                      SMS Notifications
                    </Label>
                  </div>
                  <Switch id="sms-notifications" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-muted-foreground" />
                    <Label htmlFor="push-notifications" className="font-normal">
                      Push Notifications
                    </Label>
                  </div>
                  <Switch id="push-notifications" defaultChecked />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Reminder Settings</h3>
                <div className="grid gap-2">
                  <Label htmlFor="reminder-days">Default Reminder</Label>
                  <Select defaultValue="3">
                    <SelectTrigger id="reminder-days">
                      <SelectValue placeholder="Select days" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 day before due date</SelectItem>
                      <SelectItem value="3">3 days before due date</SelectItem>
                      <SelectItem value="7">7 days before due date</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="quiet-hours">Quiet Hours</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Input id="quiet-hours-start" type="time" defaultValue="22:00" />
                    <Input id="quiet-hours-end" type="time" defaultValue="07:00" />
                  </div>
                  <p className="text-xs text-muted-foreground">No notifications will be sent during these hours</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notification Types</h3>
                <div className="flex items-center justify-between">
                  <Label htmlFor="due-date-notifications" className="font-normal">
                    Due Date Reminders
                  </Label>
                  <Switch id="due-date-notifications" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="payment-confirmations" className="font-normal">
                    Payment Confirmations
                  </Label>
                  <Switch id="payment-confirmations" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="bill-increase-alerts" className="font-normal">
                    Bill Increase Alerts
                  </Label>
                  <Switch id="bill-increase-alerts" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="new-bill-notifications" className="font-normal">
                    New Bill Notifications
                  </Label>
                  <Switch id="new-bill-notifications" defaultChecked />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="payment">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your saved payment methods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Saved Payment Methods</h3>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Visa ending in 1234</p>
                        <p className="text-sm text-muted-foreground">Expires 05/2026</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Mastercard ending in 5678</p>
                        <p className="text-sm text-muted-foreground">Expires 08/2025</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <CreditCard className="mr-2 h-4 w-4" />
                Add New Payment Method
              </Button>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Default Payment Method</h3>
                <RadioGroup defaultValue="visa">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="visa" id="visa" />
                    <Label htmlFor="visa">Visa ending in 1234</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mastercard" id="mastercard" />
                    <Label htmlFor="mastercard">Mastercard ending in 5678</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your account security and privacy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Change Password</h3>
                <div className="grid gap-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <Button>Update Password</Button>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch id="two-factor" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Session Management</h3>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Current Session</p>
                      <p className="text-sm text-muted-foreground">iPhone 13 • Colombo, Sri Lanka • Active now</p>
                    </div>
                    <div className="text-sm font-medium text-green-500">Current</div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Previous Session</p>
                      <p className="text-sm text-muted-foreground">Windows PC • Colombo, Sri Lanka • 2 days ago</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Log Out
                    </Button>
                  </div>
                </div>
                <Button variant="outline">Log Out of All Devices</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle>App Preferences</CardTitle>
              <CardDescription>Customize your app experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Language</h3>
                <RadioGroup value={language} onValueChange={setLanguage}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="english" id="english" />
                    <Label htmlFor="english">English</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sinhala" id="sinhala" />
                    <Label htmlFor="sinhala">සිංහල (Sinhala)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="tamil" id="tamil" />
                    <Label htmlFor="tamil">தமிழ் (Tamil)</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Currency</h3>
                <Select defaultValue="lkr">
                  <SelectTrigger>
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lkr">Sri Lankan Rupee (Rs.)</SelectItem>
                    <SelectItem value="usd">US Dollar ($)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Theme</h3>
                <div className="flex items-center justify-between">
                  <Label htmlFor="dark-mode" className="font-normal">
                    Dark Mode
                  </Label>
                  <Switch id="dark-mode" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Other Preferences</h3>
                <div className="flex items-center justify-between">
                  <Label htmlFor="eco-tips" className="font-normal">
                    Show Eco-Tips
                  </Label>
                  <Switch id="eco-tips" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="savings-suggestions" className="font-normal">
                    Show Savings Suggestions
                  </Label>
                  <Switch id="savings-suggestions" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="auto-sync" className="font-normal">
                    Auto-Sync with Providers
                  </Label>
                  <Switch id="auto-sync" defaultChecked />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

