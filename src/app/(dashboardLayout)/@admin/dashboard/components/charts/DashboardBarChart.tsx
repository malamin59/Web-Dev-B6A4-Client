"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";

interface Props {
  data: {
    name: string;
    value: number;
  }[];
}

const COLORS = [
  "#2563eb", // Users
  "#22c55e", // Tutors
  "#a855f7", // Students
  "#f97316", // Bookings
  "#ec4899", // Reviews
];

export default function DashboardBarChart({ data }: Props) {
  return (
    <div className="rounded-2xl border bg-white dark:bg-neutral-900 dark:border-neutral-800 p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Platform Overview</h2>
        <p className="text-sm text-gray-500">
          Users, tutors, students, bookings and reviews.
        </p>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            allowDecimals={false}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip />

          <Bar
            dataKey="value"
            radius={[8, 8, 0, 0]}
            maxBarSize={50}
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}