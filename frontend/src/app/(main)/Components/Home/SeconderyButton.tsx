export default function SecondaryButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      className="flex h-9 items-center justify-center rounded-lg bg-primary/10 px-4
         text-sm font-bold text-primary hover:bg-primary/20 cursor-pointer "
    >
      {children}
    </button>
  );
}
