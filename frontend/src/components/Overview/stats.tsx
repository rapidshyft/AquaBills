import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const stats = [
  { label: "Total Consumers", value: "100,000" },
  { label: "Revenue Collection Rate", value: "95%" },
  { label: "Average Payment Period", value: "30 days" },
  { label: "Non-Revenue Water Percentage", value: "10%" },
  { label: "Customer Satisfaction Index", value: "4.5/5" },
];

export const StatCount = () => {
  return (
    <Box as="section">
      <Container maxW={"7xl"} pt={6}>
        <SimpleGrid columns={[2, null, 5]} spacing="20px">
          {stats.map(({ label, value }) => (
            <Stat key={label} label={label} value={value} bg={"gray.100"} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

interface Props {
  label: string;
  value: string;
}

const Stat = (props: Props) => {
  const { label, value, ...boxProps } = props;
  return (
    <Box
      px={{ base: "4", md: "6" }}
      py={{ base: "5", md: "6" }}
      bg="bg.surface"
      borderRadius="lg"
      boxShadow="sm"
      {...boxProps}
    >
      <Stack>
        <Text textStyle="sm" color="fg.muted">
          {label}
        </Text>
        <Heading size={{ base: "sm", md: "md" }}>{value}</Heading>
      </Stack>
    </Box>
  );
};
