export default function BigButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white hover:bg-primary/90">
      {children}
    </button>
  );
}
