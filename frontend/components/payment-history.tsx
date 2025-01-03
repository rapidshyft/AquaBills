import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const payments = [
  {
    id: 1,
    date: "2023-06-01",
    amount: 150.0,
    method: "Credit Card",
    status: "Paid",
  },
  {
    id: 2,
    date: "2023-05-01",
    amount: 150.0,
    method: "Bank Transfer",
    status: "Paid",
  },
  {
    id: 3,
    date: "2023-04-01",
    amount: 150.0,
    method: "PayPal",
    status: "Overdue",
  },
];

export function PaymentHistory() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Payment History</CardTitle>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.date}</TableCell>
                <TableCell>${payment.amount.toFixed(2)}</TableCell>
                <TableCell>{payment.method}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      payment.status === "Paid" ? "success" : "destructive"
                    }
                  >
                    {payment.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    View Receipt
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
