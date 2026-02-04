import Link from "next/link";

export default function CoinLogo({
  href = "/",
  dashboard = false,
}: {
  href?: string;
  dashboard?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label="HYGate - Go to homepage"
      className="flex items-center gap-3 cursor-pointer pl-2 pt-1"
    >
      <svg
        className="size-6 lg:size-4 text-primary"
        fill="none"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
          fill="currentColor"
          fillRule="evenodd"
        ></path>
      </svg>
      {dashboard ? (
        <h2 className="hidden lg:block text-xl font-bold tracking-tight text-blue-400 ">
          HYGate
        </h2>
      ) : (
        <h2 className=" text-xl font-bold tracking-tight text-white ">
          HYGate
        </h2>
      )}
    </Link>
  );
}
