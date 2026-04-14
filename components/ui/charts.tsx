"use client"

import { LineChart, Line, ResponsiveContainer, BarChart, Bar } from "recharts"

const lineData = [
  { value: 200 }, { value: 300 }, { value: 250 }, { value: 450 }, { value: 400 }, { value: 550 }, { value: 650 }, { value: 500 }, { value: 800 }
]

const barData = [
  { value: 40 }, { value: 70 }, { value: 45 }, { value: 90 }, { value: 55 }, { value: 85 }, { value: 30 }, { value: 95 }
]

export function DashboardLineChart() {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={lineData}>
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#a855f7" 
            strokeWidth={3} 
            dot={{ r: 4, fill: "#111", stroke: "#a855f7", strokeWidth: 2 }} 
            activeDot={{ r: 6, fill: "#a855f7", stroke: "#000", strokeWidth: 4 }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function DashboardBarChart() {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={barData}>
          <Bar dataKey="value" fill="#a855f7" radius={[4, 4, 4, 4]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
