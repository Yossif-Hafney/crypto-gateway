export default function PrimaryButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      className="flex h-9 items-center justify-center rounded-lg bg-primary px-4
         text-sm font-bold text-white hover:bg-primary/90 cursor-pointer"
    >
      {children}
    </button>
  );
}
