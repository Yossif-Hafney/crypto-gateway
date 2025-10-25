import Link from "next/link";
import { Users, ShieldCheck } from "lucide-react";

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Link
          href="/dashboard/notifications/contacts"
          className="flex items-center gap-3 px-6 py-4 bg-linear-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 text-lg"
        >
          <Users className="w-6 h-6" />
          Contacts
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-6 py-4 bg-linear-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 text-lg"
        >
          <ShieldCheck className="w-6 h-6" />
          Security Messages
        </Link>
      </div>
    </div>
  );
}
