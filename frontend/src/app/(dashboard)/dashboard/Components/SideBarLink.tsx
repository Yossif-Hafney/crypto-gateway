import Link from "next/link";
import { ReactNode } from "react";

export default function SideBarLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon?: ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-start gap-1 lg:gap-3 px-3 py-2 rounded-lg hover:bg-blue-800/30 hover:text-white transition-all duration-200 w-full"
    >
      {icon && (
        <span className="w-6 h-6 flex items-center justify-center text-lg lg:text-xl">
          {icon}
        </span>
      )}
      <span className="font-medium text-xs lg:text-base mt-1 lg:mt-0 lg:block hidden whitespace-nowrap text-center lg:text-left">
        {label}
      </span>
    </Link>
  );
}
