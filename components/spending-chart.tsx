"use client"

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"

export function SpendingChart() {
  // Sample data for demonstration
  const data = [
    {
      name: "Jan",
      Electricity: 3200,
      Water: 1500,
      Internet: 2000,
    },
    {
      name: "Feb",
      Electricity: 3400,
      Water: 1600,
      Internet: 2000,
    },
    {
      name: "Mar",
      Electricity: 3500,
      Water: 1800,
      Internet: 2200,
    },
    {
      name: "Apr",
      Electricity: 3300,
      Water: 1700,
      Internet: 2000,
    },
    {
      name: "May",
      Electricity: 3700,
      Water: 1900,
      Internet: 2000,
    },
    {
      name: "Jun",
      Electricity: 4000,
      Water: 2100,
      Internet: 2000,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="Electricity" stackId="1" stroke="#f97316" fill="#fdba74" />
        <Area type="monotone" dataKey="Water" stackId="1" stroke="#0ea5e9" fill="#7dd3fc" />
        <Area type="monotone" dataKey="Internet" stackId="1" stroke="#8b5cf6" fill="#c4b5fd" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

