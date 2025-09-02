import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  BarChart3,
  Users,
  CreditCard,
  Shield,
  TrendingUp,
  Settings,
  FileText,
  Menu,
  X
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationItems = [
  { title: "Dashboard", url: "/admin", icon: BarChart3 },
  { title: "Users", url: "/admin/users", icon: Users },
  { title: "Transactions", url: "/admin/transactions", icon: CreditCard },
  { title: "Fraud Detection", url: "/admin/fraud", icon: Shield },
  { title: "Analytics", url: "/admin/analytics", icon: TrendingUp },
  { title: "Settings", url: "/admin/settings", icon: Settings },
  { title: "Audit Logs", url: "/admin/audit", icon: FileText },
];

export function AdminSidebar() {
  // Force refresh to fix navIsActive error
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/admin") {
      return currentPath === "/admin";
    }
    return currentPath.startsWith(path);
  };

  return (
    <Sidebar className={cn("border-r border-sidebar-border shadow-xl", collapsed ? "w-16" : "w-72")}>
      <SidebarContent className="bg-gradient-to-b from-sidebar-background to-sidebar-background/95">
        {/* Professional Logo Section */}
        <div className="px-6 py-8 border-b border-sidebar-border/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sidebar-primary rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-sidebar-primary-foreground font-bold text-lg">N</span>
            </div>
            {!collapsed && (
              <div>
                <h2 className="text-xl font-bold text-sidebar-foreground">NexusBank</h2>
                <p className="text-sm text-sidebar-foreground/60 font-medium">Administrative Console</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup className="px-4 py-6">
          <SidebarGroupLabel className="text-sidebar-foreground/50 text-xs font-semibold uppercase tracking-widest px-3 py-2">
            {!collapsed && "Management"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => {
                const itemIsActive = isActive(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="w-full">
                      <NavLink
                        to={item.url}
                        end={item.url === "/admin"}
                        className={cn(
                          "flex items-center gap-4 px-4 py-3 mx-1 rounded-xl transition-all duration-300 text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/20 group",
                          itemIsActive && 
                            "bg-sidebar-primary text-sidebar-primary-foreground font-semibold shadow-lg transform scale-[1.02]"
                        )}
                      >
                        <item.icon className="h-5 w-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        {!collapsed && <span className="font-medium">{item.title}</span>}
                        {!collapsed && itemIsActive && (
                          <div className="ml-auto w-2 h-2 bg-sidebar-primary-foreground rounded-full" />
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {/* Professional Footer */}
        {!collapsed && (
          <div className="mt-auto p-6 border-t border-sidebar-border/20">
            <div className="text-xs text-sidebar-foreground/40 font-medium">
              <p>v2.1.0 • Enterprise</p>
              <p className="mt-1">© 2024 NexusBank</p>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}