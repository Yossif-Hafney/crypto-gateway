"use client";
import LogoutButton from "./LogoutButton";
import CoinLogo from "@components/Home/CoinLogo";
import SideBarLink from "./SideBarLink";
import {
  OverviewIcon,
  MerchantsIcon,
  TransactionsIcon,
  SettingsIcon,
  NotificationsIcon,
} from "@dashboardComponents/ICons";
export default function SideBar() {
  return (
    <div className="h-screen bg-gray-900 text-white w-12 lg:w-64 transition-all duration-300 flex flex-col min-h-screen">
      <nav className="flex-1 p-1 lg:p-4 space-y-2 flex flex-col ">
        <CoinLogo href="/dashboard" dashboard />
        <div className="flex-1 flex flex-col gap-3 border-t border-gray-50/10 pt-5 ">
          <SideBarLink
            href="/dashboard"
            label="Overview"
            icon={<OverviewIcon />}
          />
          <SideBarLink
            href="/dashboard/merchants"
            label="Merchants"
            icon={<MerchantsIcon />}
          />
          <SideBarLink
            href="/dashboard/transactions"
            label="Transactions"
            icon={<TransactionsIcon />}
          />
          <SideBarLink
            href="/dashboard/notifications"
            label="Notifications"
            icon={<NotificationsIcon />}
          />
          <SideBarLink
            href="/dashboard/settings"
            label="Settings"
            icon={<SettingsIcon />}
          />
        </div>
        <div className="flex flex-col items-start pb-4 gap-3">
          <div className="flex items-center lg:gap-2 lg:bg-gray-800/80 rounded-lg lg:px-2 py-2 shadow-sm lg:border lg:border-gray-700  w-full">
            <div className="hidden lg:flex flex-col pl-2 text-left flex-1 ">
              <span className="font-bold text-sm text-white leading-tight truncate">
                John Doe
              </span>
              <span className="text-xs text-gray-400 leading-tight truncate">
                john.doe@email.com
              </span>
            </div>

            <div className=" lg:ml-2 ">
              <LogoutButton />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
