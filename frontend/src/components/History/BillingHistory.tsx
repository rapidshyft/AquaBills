import { useState, useEffect } from "react";
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
  Heading,
  HStack,
} from "@chakra-ui/react";
import { ViewBill } from "./createBill";

interface BillingRecord {
  name: string;
  meter_number: string;
  created_at: string;
  water_usage: string;
  price_per_cubic_meter: string;
  total_amount: string;
}

const BillingHistory = () => {
  const [billingRecords, setBillingRecords] = useState<BillingRecord[]>([]);

  useEffect(() => {
    fetchBillingRecords();
  }, []);

  const fetchBillingRecords = async () => {
    try {
      const response = await axios.get(
        " https://api.rapidshyft.tech/billing_records"
      );
      setBillingRecords(response.data.documents);
    } catch (error) {
      console.error("Error fetching billing records:", error);
    }
  };

  return (
    <Box>
      <Container maxW={"7xl"}>
        <HStack justify="space-between">
          <Heading size="md">Billing History</Heading>
          <ViewBill />
        </HStack>
        <Table variant="simple" mt={4}>
          <Thead>
            <Tr>
              <Th>Customer Name</Th>
              <Th>Meter Number</Th>
              <Th>Date</Th>
              <Th>Water Usage (m³)</Th>
              <Th>Price Per m³</Th>
              <Th>Total Amount ($)</Th>
            </Tr>
          </Thead>
          <Tbody>
            {billingRecords.map((record, index) => (
              <Tr key={index}>
                <Td>{record.name}</Td>
                <Td>{record.meter_number}</Td>
                <Td>{record.created_at}</Td>
                <Td>{record.water_usage}</Td>
                <Td>{record.price_per_cubic_meter}</Td>
                <Td>{record.total_amount}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    </Box>
  );
};

export default BillingHistory;
