"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, AlertTriangle, CheckCircle } from "lucide-react";

const notifications = [
  { id: 1, type: "payment", message: "Payment due in 3 days", icon: Bell },
  {
    id: 2,
    type: "usage",
    message: "Unusual water usage detected",
    icon: AlertTriangle,
  },
  {
    id: 3,
    type: "system",
    message: "System maintenance scheduled",
    icon: CheckCircle,
  },
];

export function NotificationsPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li key={notification.id} className="flex items-center space-x-4">
              <notification.icon className="h-6 w-6 text-blue-500" />
              <span>{notification.message}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
