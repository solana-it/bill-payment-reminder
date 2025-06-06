"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "@/components/ui/chart"

export function CategoryPieChart() {
  // Sample data for demonstration
  const data = [
    { name: "Electricity", value: 20000 },
    { name: "Water", value: 10000 },
    { name: "Internet", value: 12000 },
    { name: "Credit Cards", value: 35000 },
  ]

  const COLORS = ["#f97316", "#0ea5e9", "#8b5cf6", "#ef4444"]

  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `Rs. ${value.toLocaleString()}`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

