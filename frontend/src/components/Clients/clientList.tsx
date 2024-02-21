import React, { useState, useEffect } from "react";
import axios from "axios";
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
  Badge,
  Checkbox,
  IconButton,
} from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CreateUser } from "./createUser";

interface Client {
  $id: string;
  name: string;
  email: string;
  govt_id: string;
  meter_number: string;
  address: string[];
  phone_number: string;
  status: string;
}

const ClientList = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterByStatus, setFilterByStatus] = useState<string>("All");
  const [clients, setClients] = useState<Client[]>([]);
  const [selectedClients, setSelectedClients] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await axios.get(
        "http://34.202.159.66:8080/api/list_users"
      );
      setClients(response.data.documents);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStatus = e.target.value.toLowerCase(); // Convert to lowercase
    setFilterByStatus(selectedStatus);
  };

  const handleDeleteSelected = async () => {
    try {
      await axios.delete(
        " http://34.202.159.66:8080/api/delete_selected_users",
        {
          data: { ids: selectedClients },
        }
      );
      // Refresh client list after deletion
      fetchClients();
      // Clear selected clients
      setSelectedClients([]);
      navigate("/clients", { replace: true });
    } catch (error) {
      console.error("Error deleting clients:", error);
      fetchClients();
      // Clear selected clients
      setSelectedClients([]);
    }
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    clientId: string
  ) => {
    if (e.target.checked) {
      setSelectedClients((prevSelectedClients) => [
        ...prevSelectedClients,
        clientId,
      ]);
    } else {
      setSelectedClients((prevSelectedClients) =>
        prevSelectedClients.filter((id) => id !== clientId)
      );
    }
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectAll(e.target.checked);
    if (e.target.checked) {
      const allClientIds = clients.map((client) => client.$id);
      setSelectedClients(allClientIds);
    } else {
      setSelectedClients([]);
    }
  };

  const handleCreateUserSuccess = () => {
    fetchClients(); // Refresh client list after creating a user
  };

  const filteredClients = clients.filter((client) => {
    return (
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterByStatus === "All" ||
        (filterByStatus === "active" && client.status === "Active") ||
        (filterByStatus === "disabled" && client.status === "Disabled"))
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
            <CreateUser onCreateUserSuccess={handleCreateUserSuccess} />
            <IconButton
              colorScheme="red"
              onClick={handleDeleteSelected}
              disabled={selectedClients.length === 0}
              icon={<FaTrashAlt />}
              color="white"
              aria-label={""}
            ></IconButton>
          </HStack>
        </HStack>
        <Table variant="simple" mt={4} overflowX="auto">
          <Thead>
            <Tr>
              <Th>
                <Checkbox isChecked={selectAll} onChange={handleSelectAll} />
              </Th>
              <Th>ID</Th>
              <Th>Customer Name</Th>
              <Th>Email</Th>
              <Th>Govt ID</Th>
              <Th>Meter Number</Th>
              <Th>Address</Th>
              <Th>Phone Number</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredClients.map((client) => (
              <Tr key={client.$id}>
                <Td>
                  <Checkbox
                    isChecked={selectedClients.includes(client.$id)}
                    onChange={(e) => handleCheckboxChange(e, client.$id)}
                  />
                </Td>
                <Td>{client.$id}</Td>
                <Td>{client.name}</Td>
                <Td>{client.email}</Td>
                <Td>{client.govt_id}</Td>
                <Td>{client.meter_number}</Td>
                <Td>{client.address.join(" , ")}</Td>
                <Td>{client.phone_number}</Td>
                <Td>
                  {client.status === "Active" ? (
                    <Badge colorScheme="green">Active</Badge>
                  ) : (
                    <Badge colorScheme="red">Disabled</Badge>
                  )}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    </Box>
  );
};

export default ClientList;
