import {
  AudioWaveform,
  GalleryVerticalEnd,
  Settings2,
  SquareTerminal,
  CreditCard,
  BarChart2,
  Bell,
  Users,
  FileBarChart,
  Gauge,
  HeadphonesIcon,
} from "lucide-react";

export const sidebarData = {
  user: {
    name: "Admin User",
    email: "admin@example.com",
    avatar: "/images/image4.jpg",
  },
  teams: [
    {
      name: "Water Co.",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "City Utilities",
      logo: AudioWaveform,
      plan: "Pro",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: SquareTerminal,
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
      icon: Users,
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
