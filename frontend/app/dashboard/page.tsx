"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PaymentHistory } from "@/components/payment-history";
import { UsageAnalytics } from "@/components/usage-analytics";
import { NotificationsPanel } from "@/components/notifications-panel";
import { RecentActivity } from "@/components/recent-activity";
import {
  ArrowDown,
  ArrowUp,
  DollarSign,
  Users,
  Droplets,
  AlertTriangle,
} from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";

export default function DashboardPage() {
  return (
    <div className=" ">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-white px-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-blue-600">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <main className="justify-between, items-center">
        <div className="max-w-fit mx-auto p-6 space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Overview</h1>
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toString()}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Total Customers
                </CardTitle>
                <Users className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <div className="flex items-center text-xs text-green-600">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span>20% from last month</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600" />
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Total Revenue
                </CardTitle>
                <DollarSign className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$54,321</div>
                <div className="flex items-center text-xs text-green-600">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span>15% from last month</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600" />
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Overdue Payments
                </CardTitle>
                <AlertTriangle className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23</div>
                <div className="flex items-center text-xs text-red-600">
                  <ArrowDown className="h-4 w-4 mr-1" />
                  <span>5% from last month</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600" />
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Water Usage
                </CardTitle>
                <Droplets className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234,567 gal</div>
                <div className="flex items-center text-xs text-yellow-600">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span>8% from last month</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600" />
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="p-0">
              <Tabs defaultValue="payments" className="space-y-4">
                <TabsList className="bg-white border border-slate-200 w-full justify-start h-auto p-0 rounded-lg dark:border-slate-800">
                  <TabsTrigger
                    value="payments"
                    className="data-[state=active]:bg-gray-100 rounded-none first:rounded-l-lg last:rounded-r-lg px-6 py-3"
                  >
                    Payment History
                  </TabsTrigger>
                  <TabsTrigger
                    value="usage"
                    className="data-[state=active]:bg-gray-100 rounded-none first:rounded-l-lg last:rounded-r-lg px-6 py-3"
                  >
                    Usage Analytics
                  </TabsTrigger>
                  <TabsTrigger
                    value="notifications"
                    className="data-[state=active]:bg-gray-100 rounded-none first:rounded-l-lg last:rounded-r-lg px-6 py-3"
                  >
                    Notifications
                  </TabsTrigger>
                  <TabsTrigger
                    value="activity"
                    className="data-[state=active]:bg-gray-100 rounded-none first:rounded-l-lg last:rounded-r-lg px-6 py-3"
                  >
                    Recent Activity
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="payments" className="mt-6">
                  <PaymentHistory />
                </TabsContent>
                <TabsContent value="usage" className="mt-6">
                  <UsageAnalytics />
                </TabsContent>
                <TabsContent value="notifications" className="mt-6">
                  <NotificationsPanel />
                </TabsContent>
                <TabsContent value="activity" className="mt-6">
                  <RecentActivity />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
