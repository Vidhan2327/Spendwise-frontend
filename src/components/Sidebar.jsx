import { NavLink as RouterNavLink } from "react-router-dom";
import { HomeIcon, ChartPieIcon, Cog6ToothIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';

const SidebarLink = ({ icon: Icon, to, text, end }) => (
  <RouterNavLink
    to={to}
    end={end} // ensures exact match for active link
    className={({ isActive }) =>
      `flex items-center p-3 rounded-lg transition-colors duration-200 ${
        isActive
          ? 'bg-blue-600 text-white shadow-lg'
          : 'text-gray-400 hover:bg-gray-700 hover:text-white'
      }`
    }
  >
    {Icon && <Icon className="h-5 w-5 mr-3" />}
    <span className="font-semibold">{text}</span>
  </RouterNavLink>
);

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 p-6 flex flex-col justify-between">
      <div>
        <div className="mb-12 text-center">
          <h1 className="text-2xl font-bold text-white">SpendWise AI</h1>
          <p className="text-gray-400 text-sm">Smart Budgeting</p>
        </div>
        <nav>
          <ul className="space-y-4">
            <li><SidebarLink icon={HomeIcon} to="/app" text="Dashboard" end /></li> {/* only active on exact /app */}
            <li><SidebarLink icon={ChartPieIcon} to="/app/budgets" text="Budgets" /></li>
            <li><SidebarLink icon={Cog6ToothIcon} to="/app/settings" text="Settings" /></li>
          </ul>
        </nav>
      </div>

      <div className="mt-auto">
        <SidebarLink icon={ArrowLeftOnRectangleIcon} to="/logout" text="Logout" />
      </div>
    </aside>
  );
}
