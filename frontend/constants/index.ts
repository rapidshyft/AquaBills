import {
  Settings2,
  CreditCard,
  BarChart2,
  Bell,
  Users,
  FileBarChart,
  Gauge,
  HeadphonesIcon,
  UserCheck2Icon,
  Home,
} from "lucide-react";

export const sidebarData = {
  user: {
    name: "Admin User",
    email: "admin@example.com",
    avatar: "/images/image4.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
      isActive: true,
    },
    {
      title: "Customers",
      url: "/customers",
      icon: Users,
    },
    {
      title: "Billing",
      url: "/billing",
      icon: CreditCard,
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: BarChart2,
    },
    {
      title: "Notifications",
      url: "/notifications",
      icon: Bell,
    },
    {
      title: "Admin",
      url: "/admin",
      icon: UserCheck2Icon,
    },
    {
      title: "Reports",
      url: "/reports",
      icon: FileBarChart,
    },
    {
      title: "Integrations",
      url: "/integrations",
      icon: Gauge,
    },
    {
      title: "Customer Support",
      url: "/support",
      icon: HeadphonesIcon,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
    },
  ],
};
