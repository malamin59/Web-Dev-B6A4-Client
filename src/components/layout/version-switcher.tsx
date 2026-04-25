"use client"

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { GalleryVerticalEndIcon} from "lucide-react"
import Link from "next/link"

export function VersionSwitcher()
 {

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <GalleryVerticalEndIcon className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <Link href={'/'} className="font-medium">Skill Bridge</Link>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
           </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

            