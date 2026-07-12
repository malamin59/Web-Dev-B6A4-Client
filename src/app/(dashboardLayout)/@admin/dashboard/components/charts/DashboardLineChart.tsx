"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface Props {
  data: {
    month: string;
    bookings: number;
  }[];
}

export default function DashboardLineChart({ data }: Props) {
  return (
    <div className="rounded-2xl border bg-white dark:bg-neutral-900 dark:border-neutral-800 p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
          Monthly Booking Growth
        </h2>

        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          Number of bookings created each month.
        </p>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 13 }}
          />

          <YAxis
            allowDecimals={false}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 10px 25px rgba(0,0,0,.08)",
            }}
          />

          <Line
            type="monotone"
            dataKey="bookings"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{
              r: 5,
              fill: "#2563eb",
            }}
            activeDot={{
              r: 7,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}