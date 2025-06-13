import "@/src/styles/globals.css";
import Sidebar from "@/src/components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      
      <div className="flex h-[calc(100vh-4rem)] w-full overflow-hidden">
        {/* Sidebar (Fixed height, non-scrollable) */}
        <div className="w-1/4 h-full overflow-y-auto border-r border-gray-200">
          <Sidebar />
        </div>

        {/* Children area (Scrolls independently) */}
        <div className="w-4/5 h-full overflow-y-auto p-4">
          {children}
        </div>
      </div>
    </>
  );
}
