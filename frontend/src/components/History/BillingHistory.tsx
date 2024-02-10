import { useState } from "react";
import {
  Box,
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  HStack,
  Heading,
  Select,
} from "@chakra-ui/react";

interface BillingRecord {
  id: number;
  customerId: string;
  customerName: string;
  address: string;
  date: string;
  waterUsage: number;
  pricePerCubicMeter: number;
  totalAmount: number;
  status: "paid" | "pending";
}

const BillingHistory = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterByStatus, setFilterByStatus] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("date");

  const sampleBillingRecords: BillingRecord[] = [
    {
      id: 1,
      customerId: "C001",
      customerName: "John Doe",
      address: "123 Main St",
      date: "2024-01-15",
      waterUsage: 10,
      pricePerCubicMeter: 5,
      totalAmount: 50,
      status: "paid",
    },
    {
      id: 2,
      customerId: "C002",
      customerName: "Alice Smith",
      address: "456 Elm St",
      date: "2024-01-10",
      waterUsage: 8,
      pricePerCubicMeter: 5,
      totalAmount: 40,
      status: "pending",
    },
    {
      id: 3,
      customerId: "C003",
      customerName: "Bob Johnson",
      address: "789 Oak St",
      date: "2024-01-05",
      waterUsage: 12,
      pricePerCubicMeter: 5,
      totalAmount: 60,
      status: "paid",
    },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterByStatus(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const filteredRecords = sampleBillingRecords.filter((record) => {
    return (
      record.customerName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterByStatus === "All" || record.status === filterByStatus)
    );
  });

  const sortedRecords = filteredRecords.sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === "customerName") {
      return a.customerName.localeCompare(b.customerName);
    } else if (sortBy === "waterUsage") {
      return a.waterUsage - b.waterUsage;
    } else if (sortBy === "totalAmount") {
      return a.totalAmount - b.totalAmount;
    }
    return 0;
  });

  return (
    <Box>
      <Container maxW={"7xl"}>
        <HStack justify="space-between">
          <Heading size="md">Billing History</Heading>
          <HStack spacing={4}>
            <Input
              placeholder="Search by name"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Select value={filterByStatus} onChange={handleFilterChange}>
              <option value="All">All</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
            </Select>
            <Select value={sortBy} onChange={handleSortChange}>
              <option value="date">Sort by Date</option>
              <option value="customerName">Sort by Customer Name</option>
              <option value="waterUsage">Sort by Water Usage</option>
              <option value="totalAmount">Sort by Total Amount</option>
            </Select>
          </HStack>
        </HStack>
        <Table variant="simple" mt={4}>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Customer Name</Th>
              <Th>Address</Th>
              <Th>Date</Th>
              <Th>Water Usage (m³)</Th>
              <Th>Price Per m³</Th>
              <Th>Total Amount</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sortedRecords.map((record) => (
              <Tr key={record.id}>
                <Td>{record.id}</Td>
                <Td>{record.customerName}</Td>
                <Td>{record.address}</Td>
                <Td>{record.date}</Td>
                <Td>{record.waterUsage}</Td>
                <Td>{record.pricePerCubicMeter}</Td>
                <Td>{record.totalAmount}</Td>
                <Td>{record.status}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    </Box>
  );
};

export default BillingHistory;
