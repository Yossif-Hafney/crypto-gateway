import FeesSettings from "./Components/Fees";
import SaveButton from "./Components/savebutton";
import SettingsTable from "./Components/table";

export default function SettingsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-6 text-white">Settings</h1>
        <SettingsTable />
        <FeesSettings />
      </div>
      <div className="w-full flex justify-end px-4 pb-4">
        <SaveButton />
      </div>
    </div>
  );
}
