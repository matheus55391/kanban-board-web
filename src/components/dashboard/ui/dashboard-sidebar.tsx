"use client";

import { Package2, Home, Settings } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { usePathname } from "next/navigation";
import { Button } from "../../ui/button";
import SidebarLink from "./sidebar-link";
import { ThemeToggleButton } from "@/components/core/theme-toggle-button";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const isDashboard = pathname === "/dashboard";
  const isSettings = pathname === "/dashboard/settings";

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">MegaBoard</span>
          </Link>
        </div>
        <div className="flex-1 ">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 space-y-2  border-b py-4">
            <SidebarLink href="/dashboard" icon={Home} isActive={isDashboard}>
              Dashboard
            </SidebarLink>
            <SidebarLink
              href="/dashboard/settings"
              icon={Settings}
              isActive={isSettings}
            >
              Settings
            </SidebarLink>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Card x-chunk="dashboard-02-chunk-0">
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
