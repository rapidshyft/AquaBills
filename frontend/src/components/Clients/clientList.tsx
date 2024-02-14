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
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Spacer,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa6";
import { CreateUser } from "./createUser";

interface Client {
  id: number;
  name: string;
  address: string;
  dateCreated: string;
  meterNumber: string;
  status: "active" | "disabled";
}

const ClientList = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterByStatus, setFilterByStatus] = useState<string>("All");

  const sampleClients: Client[] = [
    {
      id: 1,
      name: "John Doe",
      address: "123 Main St",
      dateCreated: "2023-05-15",
      meterNumber: "M001",
      status: "active",
    },
    {
      id: 2,
      name: "Alice Smith",
      address: "456 Elm St",
      dateCreated: "2022-10-10",
      meterNumber: "M002",
      status: "disabled",
    },
    {
      id: 3,
      name: "Bob Johnson",
      address: "789 Oak St",
      dateCreated: "2024-01-05",
      meterNumber: "M003",
      status: "active",
    },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterByStatus(e.target.value);
  };

  const filteredClients = sampleClients.filter((client) => {
    return (
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterByStatus === "All" || client.status === filterByStatus)
    );
  });

  return (
    <Box>
      <Container maxW={"7xl"}>
        <HStack justify="space-between">
          <Heading size="md">Client List</Heading>
          <HStack justify="space-between">
            <Input
              placeholder="Search by name"
              value={searchQuery}
              onChange={handleSearchChange}
            />

            <Select value={filterByStatus} onChange={handleFilterChange}>
              <option value="All">All</option>
              <option value="active">Active</option>
              <option value="disabled">Disabled</option>
            </Select>
            <CreateUser />
          </HStack>
        </HStack>
        <Table variant="simple" mt={4}>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Customer Name</Th>
              <Th>Address</Th>
              <Th>Date Created</Th>
              <Th>Meter Number</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredClients.map((client) => (
              <Tr key={client.id}>
                <Td>{client.id}</Td>
                <Td>{client.name}</Td>
                <Td>{client.address}</Td>
                <Td>{client.dateCreated}</Td>
                <Td>{client.meterNumber}</Td>
                <Td>{client.status}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    </Box>
  );
};

export default ClientList;
