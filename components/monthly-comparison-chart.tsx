"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "@/components/ui/chart"

export function MonthlyComparisonChart() {
  // Sample data for demonstration
  const data = [
    {
      name: "Jan",
      "2024": 5000,
      "2025": 7500,
    },
    {
      name: "Feb",
      "2024": 5500,
      "2025": 7000,
    },
    {
      name: "Mar",
      "2024": 6000,
      "2025": 7500,
    },
    {
      name: "Apr",
      "2024": 5800,
      "2025": 0,
    },
    {
      name: "May",
      "2024": 6200,
      "2025": 0,
    },
    {
      name: "Jun",
      "2024": 6500,
      "2025": 0,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip formatter={(value) => `Rs. ${value.toLocaleString()}`} />
        <Legend />
        <Bar dataKey="2024" fill="#8b5cf6" />
        <Bar dataKey="2025" fill="#f97316" />
      </BarChart>
    </ResponsiveContainer>
  )
}

