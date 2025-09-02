import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "./AdminSidebar";
import { AdminHeader } from "./AdminHeader";

interface AdminLayoutProps {
  title?: string;
}

export function AdminLayout({ title }: AdminLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gradient-to-br from-background via-background to-muted/20">
        <AdminSidebar />
        <div className="flex-1 flex flex-col">
          <AdminHeader title={title} />
          <main className="flex-1 p-8 bg-gradient-to-br from-background via-background to-muted/10">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}