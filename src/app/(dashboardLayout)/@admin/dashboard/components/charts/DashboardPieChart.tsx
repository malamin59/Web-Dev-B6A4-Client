"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
} from "recharts";

interface Props {
  data: {
    name: string;
    value: number;
  }[];
}

const COLORS = [
  "#2563eb", // Blue
  "#22c55e", // Green
  "#a855f7", // Purple
  "#f97316", // Orange
  "#ec4899", // Pink
];

export default function DashboardPieChart({ data }: Props) {
  return (
    <div className="rounded-2xl border bg-white dark:bg-neutral-900 dark:border-neutral-800 p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
          User Distribution
        </h2>

        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          Student vs Tutor ratio.
        </p>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={4}
            cornerRadius={8}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 10px 25px rgba(0,0,0,.08)",
            }}
          />

          <Legend verticalAlign="bottom" iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
