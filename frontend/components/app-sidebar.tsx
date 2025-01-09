"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import { sidebarData } from "../constants";

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
      side="left"
      variant="floating"
      collapsible="icon"
      className="border-r overflow-hidden"
      {...props}
    >
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
