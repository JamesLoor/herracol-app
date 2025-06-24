import { UserButton } from "@clerk/nextjs";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

export default function AdminHeader({ handleClicked, clicked }) {
  return (
    <header className="border-b border-gray-200 px-3 py-2 md:px-6 md:py-4">
      <div className="flex items-center justify-between">
        <button
          onClick={handleClicked}
          className="hover:bg-gray-100 rounded-md p-2 md:p-3 transition-all duration-200 cursor-pointer"
        >
          {clicked ? (
            <PanelLeftClose width={18} height={18} />
          ) : (
            <PanelLeftOpen width={18} height={18} />
          )}
        </button>

        <div className="flex items-center gap-4">
          <UserButton showName />
        </div>
      </div>
    </header>
  );
}
