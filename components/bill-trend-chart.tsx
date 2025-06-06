"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "@/components/ui/chart"

export function BillTrendChart() {
  // Sample data for demonstration
  const data = [
    {
      name: "Oct",
      Electricity: 3000,
      Water: 1500,
      Internet: 2000,
      "Credit Card": 12000,
    },
    {
      name: "Nov",
      Electricity: 3200,
      Water: 1600,
      Internet: 2000,
      "Credit Card": 13500,
    },
    {
      name: "Dec",
      Electricity: 3500,
      Water: 1700,
      Internet: 2000,
      "Credit Card": 15000,
    },
    {
      name: "Jan",
      Electricity: 3300,
      Water: 1600,
      Internet: 2200,
      "Credit Card": 14000,
    },
    {
      name: "Feb",
      Electricity: 3200,
      Water: 1500,
      Internet: 2000,
      "Credit Card": 12500,
    },
    {
      name: "Mar",
      Electricity: 3500,
      Water: 1800,
      Internet: 2200,
      "Credit Card": 15000,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip formatter={(value) => `Rs. ${value.toLocaleString()}`} />
        <Legend />
        <Line type="monotone" dataKey />
        <Legend />
        <Line type="monotone" dataKey="Electricity" stroke="#f97316" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Water" stroke="#0ea5e9" />
        <Line type="monotone" dataKey="Internet" stroke="#8b5cf6" />
        <Line type="monotone" dataKey="Credit Card" stroke="#ef4444" />
      </LineChart>
    </ResponsiveContainer>
  )
}

