"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import { sidebarData } from "../constants/sidebar-data";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  // Update active states based on current path
  const navItems = React.useMemo(() => {
    return sidebarData.navMain.map((item) => ({
      ...item,
      isActive: pathname === item.url || pathname.startsWith(item.url + "/"),
    }));
  }, [pathname]);

  return (
    <Sidebar
      collapsible="icon"
      className="bg-black text-black border-r overflow-hidden"
      {...props}
    >
      <SidebarHeader>
        <NavUser user={sidebarData.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
