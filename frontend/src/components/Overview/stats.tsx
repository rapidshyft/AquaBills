import React from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

interface Stat {
  label: string;
  value: string;
  tooltip?: string;
  trend?: "increase" | "decrease" | "unchanged";
}

const stats: Stat[] = [
  {
    label: "Total Consumers",
    value: "100,000",
    tooltip: "The total number of customers using our services",
    trend: "increase",
  },
  {
    label: "Revenue Collection Rate",
    value: "95%",
    tooltip: "Percentage of revenue collected out of total billed amount",
    trend: "increase",
  },
  {
    label: "Average Payment Period",
    value: "30 days",
    tooltip: "The average time taken by customers to make payments",
    trend: "decrease",
  },
  {
    label: "Non-Revenue Water Percentage",
    value: "10%",
    tooltip: "Percentage of water lost due to leaks or theft",
    trend: "decrease",
  },
  {
    label: "Customer Satisfaction Index",
    value: "4.5/5",
    tooltip:
      "Average rating provided by customers based on satisfaction surveys",
    trend: "increase",
  },
];
export const StatCount: React.FC = () => {
  return (
    <Box as="section" py={10} bg="gray.50">
      <Container maxW={"7xl"}>
        <SimpleGrid columns={[1, null, 5]} spacing="6">
          {stats.map(({ label, value, tooltip, trend }) => (
            <Stat
              key={label}
              label={label}
              value={value}
              tooltip={tooltip}
              trend={trend}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

interface StatProps {
  label: string;
  value: string;
  tooltip?: string;
  trend?: "increase" | "decrease" | "unchanged";
}

const Stat: React.FC<StatProps> = ({ label, value, tooltip, trend }) => {
  return (
    <Tooltip label={tooltip} aria-label={label} placement="top" hasArrow>
      <Box
        px={{ base: "4", md: "6" }}
        py={{ base: "5", md: "6" }}
        bg="white"
        borderRadius="lg"
        boxShadow="md"
        textAlign="center"
      >
        <Stack>
          <Text color="gray.600" fontSize="sm" fontWeight="medium">
            {label}
          </Text>
          <Heading size="md" color="gray.900">
            {trend === "increase" && <FaArrowUp style={{ color: "green" }} />}
            {trend === "decrease" && <FaArrowDown style={{ color: "red" }} />}
            {value}
          </Heading>
        </Stack>
      </Box>
    </Tooltip>
  );
};

export default Stat;
