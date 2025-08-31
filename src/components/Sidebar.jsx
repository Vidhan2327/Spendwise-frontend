import { NavLink as RouterNavLink, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";

const SidebarLink = ({ icon: Icon, to, text, end, onClick }) => {
  
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="flex items-center p-3 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white w-full"
      >
        {Icon && <Icon className="h-5 w-5 mr-3" />}
        <span className="font-semibold">{text}</span>
      </button>
    );
  }

  return (
    <RouterNavLink
      to={to}
      end={end} // ensures exact match for active link
      className={({ isActive }) =>
        `flex items-center p-3 rounded-lg transition-colors duration-200 ${
          isActive
            ? "bg-blue-600 text-white shadow-lg"
            : "text-gray-400 hover:bg-gray-700 hover:text-white"
        }`
      }
    >
      {Icon && <Icon className="h-5 w-5 mr-3" />}
      <span className="font-semibold">{text}</span>
    </RouterNavLink>
  );
};

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
  try {
    await axios.post(
      "http://localhost:5001/api/auth/logout",
      {},
      { withCredentials: true } 
    );
  } catch (err) {
    console.error("Logout failed", err);
  } finally {
    localStorage.removeItem("user");
    navigate("/intro");
  }
};
  return (
    <aside className="w-64 bg-gray-800 p-6 flex flex-col justify-between min-h-screen">
     
      <div>
        <div className="mb-12 text-center">
          <h1 className="text-2xl font-bold text-white">SpendWise AI</h1>
          <p className="text-gray-400 text-sm">Smart Budgeting</p>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="space-y-4">
            <li>
              <SidebarLink icon={HomeIcon} to="/app" text="Dashboard" end />
            </li>
            <li>
              <SidebarLink
                icon={ChartPieIcon}
                to="/app/budgets"
                text="Budgets"
              />
            </li>
            <li>
              <SidebarLink
                icon={Cog6ToothIcon}
                to="/app/settings"
                text="Settings"
              />
            </li>
          </ul>
        </nav>
      </div>

      {/* Logout Button */}
      <div className="mt-auto">
        <SidebarLink
          icon={ArrowLeftOnRectangleIcon}
          text="Logout"
          onClick={handleLogout}
        />
      </div>
    </aside>
  );
}
