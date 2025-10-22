import SectionCards from "./SectionCards";

export default function Overview() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-white tracking-tight">
        Overview
      </h1>
      <div className="space-y-6 w-full">
        <SectionCards />
      </div>
    </>
  );
}
