import DashboardSidebar from "./ui/dashboard-sidebar";
import DashboardHeader from "./ui/dashboard-header";

interface SidebarLinkProps {
  children?: React.ReactNode;
}

export function DashboardLayout({ children }: SidebarLinkProps) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] max-h-full overflow-hidden">
      <DashboardSidebar />
      <div className="flex flex-col min-h-full max-h-screen max-w-full overflow-auto">
        <DashboardHeader />
        <main className="flex flex-1 flex-col p-2 md:p-4 lg:p-6 max-h-full   ">
          {children}
        </main>
      </div>
    </div>
  );
}
