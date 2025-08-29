import React from "react";

export default function DashboardCard({ title, value, icon: Icon, iconSize = "h-6 w-6" }) {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-lg flex items-center space-x-4 transition-transform hover:scale-105 duration-300 cursor-pointer">
      <div className="p-3 bg-blue-200/20 rounded-full flex items-center justify-center">
        {Icon && <Icon className={`${iconSize} text-blue-600`} />}
      </div>
      <div>
        <p className="text-gray-400 text-sm font-medium">{title}</p>
        <p className="text-white text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}
