import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, DollarSign, FileText, Settings } from "lucide-react";

const activities = [
  { id: 1, type: "user", message: "New customer registered", icon: User },
  { id: 2, type: "payment", message: "Payment received", icon: DollarSign },
  { id: 3, type: "invoice", message: "Invoice generated", icon: FileText },
  { id: 4, type: "system", message: "System settings updated", icon: Settings },
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activities.map((activity) => (
            <li key={activity.id} className="flex items-center space-x-4">
              <activity.icon className="h-6 w-6 text-blue-500" />
              <span>{activity.message}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
