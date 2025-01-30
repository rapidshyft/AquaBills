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
import { PlusIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const tableHeaders: { [key: string]: string } = {
  id: "ID",
  first_name: "First Name",
  last_name: "Last Name",
  national_id: "National ID",
  address: "Address",
  city: "City",
  state: "State",
  postal_code: "Postal Code",
  phone: "Phone No.",
  email: "Email",
};

export function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response: Response = await fetch(
          "http://0.0.0.0:8000/account_holders"
        );
        if (!response.ok) {
          console.log(`HTTP error! status: ${response.status}`);

          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: any = await response.json();
        setUsers(data);
      } catch (error: any) {
        setError(error.message);
      }
    };
    fetchUsers();
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Account Holders</CardTitle>
        <div className="">
          <Button variant="outline" size="sm">
            <PlusIcon className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {error ? (
          <p>Error: {error}</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                {Object.keys(tableHeaders).map((header) => (
                  <TableHead key={header}>{tableHeaders[header]}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user: any) => {
                const hasAllHeaders = Object.keys(tableHeaders).every(
                  (header) => header in user
                );
                if (!hasAllHeaders) return null;
                return (
                  <TableRow key={user.id}>
                    {Object.keys(tableHeaders).map((header) => (
                      <TableCell key={header}>{user[header]}</TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}
