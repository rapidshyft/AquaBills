"use client";
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
import { Download, PlusIcon, SearchIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const customers = [
  {
    id: 1,
    govt_id: "12gwg262",
    first_name: "Lwazi",
    last_name: "Ncube",
    address: "6904 lake drive",
    city: "Bulawayo",
    state: ".....",
    phone: "0717939052",
    email: "lwazi*****@gmail.com",
  },
  {
    id: 2,
    govt_id: "12gwg262",
    first_name: "Mike",
    last_name: "Ndlovu",
    address: "04 Mount drive",
    city: "Bulawayo",
    state: ".....",
    phone: "0717939052",
    email: "mike*****@gmail.com",
  },
];

const tableHeaders = [
  "Id",
  "National ID",
  "First Name",
  "Last Name",
  "Address",
  "City",
  "State",
  "Phone No.",
  "Email",
];

export function Customers() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Residents</CardTitle>
        <div className="">
          <Button variant="outline" size="sm">
            <PlusIcon className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {tableHeaders.map((tableHeader) => (
                <TableHead>{tableHeader}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                {Object.entries(customer).map(([key, value]) => (
                  <TableCell>{value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
