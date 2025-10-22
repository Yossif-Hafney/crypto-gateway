interface StatusCardProps {
  title: string;
  bgColor: string;
}

export default function StatusCard({ title, bgColor }: StatusCardProps) {
  return (
    <span
      className={`inline-flex items-center justify-center w-24 px-3 py-1 rounded-lg ${bgColor} text-xs font-semibold text-white shadow-md ring-1 ring-black/10 tracking-wider uppercase transition-all duration-200 hover:shadow-lg hover:scale-105 select-none text-center align-middle`}
    >
      {title}
    </span>
  );
}
