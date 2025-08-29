import React from "react";
import DashboardCard from "../components/DashboardCard";
import { BanknotesIcon, ChartBarIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

export default function Dashboard() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">Welcome Back!</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105">
          + Add Expense
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard title="Total Spent This Month" value="₹ 12,540" icon={BanknotesIcon} />
        <DashboardCard title="Savings Goal Progress" value="75%" icon={ArrowTrendingUpIcon} />
        <DashboardCard title="Top Spending Category" value="Food & Dining" icon={ChartBarIcon} />
      </div>

      <div className="mt-10 bg-gray-800 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold text-white mb-4">Recent Transactions</h3>
        <p className="text-gray-400">Your recent transactions will appear here...</p>
      </div>
    </div>
  );
}
