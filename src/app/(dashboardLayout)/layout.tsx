"use client";
import { AppSidebar } from "@/components/layout/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useSession } from "next-auth/react";

export default function Dashboard({
  admin,
  user,
  tutors,
}: {
  admin: React.ReactNode;
  user: React.ReactNode;
  tutors: React.ReactNode;
}) {
  const session = useSession();
  const userData = session.data?.user.role;

  const roleComponentMap: Record<string, React.ReactNode> = {
    ADMIN: admin,
    TUTOR: tutors,
    USER: user,
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              {/* <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Build Your Application</BreadcrumbLink>
              </BreadcrumbItem> */}
              <BreadcrumbSeparator className="hidden md:block" />
              {/* <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem> */}
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        {/* Check user role  */}
        {roleComponentMap[userData as string] || user}
      </SidebarInset>
    </SidebarProvider>
  );
}
