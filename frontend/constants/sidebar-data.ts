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
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Customer Management",
      url: "/customers",
      icon: Users,
    },
    {
      title: "Billing",
      url: "/billing",
      icon: CreditCard,
    },
    {
      title: "Usage Analytics",
      url: "/analytics",
      icon: BarChart2,
    },
    {
      title: "Notifications",
      url: "/notifications",
      icon: Bell,
    },
    {
      title: "Admin Management",
      url: "/admin",
      icon: Users,
    },
    {
      title: "Reports",
      url: "/reports",
      icon: FileBarChart,
    },
    {
      title: "Meter Integration",
      url: "/meters",
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
