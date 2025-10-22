export default function ProgressBar() {
  return (
    <div className="mt-6">
      <p className="text-sm font-medium text-gray-400">Step 1 of 3</p>
      <div className="mt-2 h-2 w-full rounded-full bg-gray-700">
        <div className="h-2 w-1/3 rounded-full bg-primary"></div>
      </div>
    </div>
  );
}
