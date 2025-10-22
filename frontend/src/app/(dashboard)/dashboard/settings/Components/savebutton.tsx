export default function SaveButton() {
  return (
    <button
      className="rounded-lg cursor-pointer bg-primary px-5 py-2.5
       text-sm font-semibold text-white shadow-sm hover:bg-primary/80
       focus-visible:outline-2 focus-visible:outline-offset-2
       focus-visible:outline-primary"
      type="button"
      aria-label="Save Settings"
    >
      Save Settings
    </button>
  );
}
