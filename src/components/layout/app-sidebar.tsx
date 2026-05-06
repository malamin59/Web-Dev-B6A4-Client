import * as React from "react";
import { VersionSwitcher } from "@/components/layout/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { routeMap, Role } from "@/app/(dashboardLayout)/routes/route";
import { useUserRole } from "@/hooks/userRole";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { role, isLoading } = useUserRole();
  if (isLoading) return <p>Loading...</p>;

  const routes = routeMap[role as Role] ?? routeMap.STUDENT;
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher />
        {/* <SearchForm /> */}
      </SidebarHeader>
      <SidebarContent>
        {routes.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
