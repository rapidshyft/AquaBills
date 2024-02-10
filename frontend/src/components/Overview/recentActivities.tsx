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
  HStack,
  Heading,
  Select,
} from "@chakra-ui/react";

interface Activity {
  id: number;
  customerId: string;
  customerName: string;
  description: string;
  date: string;
  status: "paid" | "processing" | "pending";
}

const RecentActivities = () => {
  const [sortBy, setSortBy] = useState<string>("date");
  const [filterByStatus, setFilterByStatus] = useState<string>("All");

  // Sample recent activities data
  const recentActivities: Activity[] = [
    {
      id: 1,
      customerId: "C001",
      customerName: "John Doe",
      description: "Completed water meter readings",
      date: "2024-01-23",
      status: "paid",
    },
    {
      id: 2,
      customerId: "C002",
      customerName: "Alice Smith",
      description: "Processed billing for residential customers",
      date: "2024-01-22",
      status: "processing",
    },
    {
      id: 3,
      customerId: "C003",
      customerName: "Bob Johnson",
      description: "Investigated reported water leak",
      date: "2024-01-21",
      status: "pending",
    },
    {
      id: 4,
      customerId: "C004",
      customerName: "Emma Brown",
      description: "Conducted maintenance on water distribution system",
      date: "2024-01-20",
      status: "processing",
    },
    {
      id: 5,
      customerId: "C005",
      customerName: "Sophia Lee",
      description: "Resolved customer billing inquiry",
      date: "2024-01-19",
      status: "paid",
    },
  ];

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterByStatus(e.target.value);
  };

  const filteredActivities =
    filterByStatus === "All"
      ? recentActivities
      : recentActivities.filter(
          (activity) => activity.status === filterByStatus
        );

  const sortedActivities = filteredActivities.sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === "customerId") {
      return a.customerId.localeCompare(b.customerId);
    } else if (sortBy === "customerName") {
      return a.customerName.localeCompare(b.customerName);
    }
    // Add more sorting options as needed
    return 0;
  });

  return (
    <Box>
      <Container maxW={"7xl"} pt={6}>
        <HStack justify="space-between">
          <Heading size="md">Recent Activities</Heading>
          <HStack spacing={4}>
            <Select value={sortBy} onChange={handleSortChange}>
              <option value="date">Sort by Date</option>
              <option value="customerId">Sort by Customer ID</option>
              <option value="customerName">Sort by Customer Name</option>
              {/* Add more sorting options here */}
            </Select>
            <Select value={filterByStatus} onChange={handleFilterChange}>
              <option value="All">All</option>
              <option value="paid">Paid</option>
              <option value="processing">Processing</option>
              <option value="pending">Pending</option>
            </Select>
          </HStack>
        </HStack>
        <Table variant="simple" mt={4}>
          <Thead>
            <Tr>
              <Th>Description</Th>
              <Th>Customer ID</Th>
              <Th>Customer Name</Th>
              <Th>Date</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sortedActivities.map((activity) => (
              <Tr key={activity.id}>
                <Td>{activity.description}</Td>
                <Td>{activity.customerId}</Td>
                <Td>{activity.customerName}</Td>
                <Td>{activity.date}</Td>
                <Td>{activity.status}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    </Box>
  );
};

export default RecentActivities;
