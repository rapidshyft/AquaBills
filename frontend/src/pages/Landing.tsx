import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  Input,
  useBreakpointValue,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaLock, FaMoneyBillAlt } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa6";
import { FiArrowRightCircle } from "react-icons/fi";
import Footer from "../components/common/Footer";

const MotionBox = motion(Box);

const LandingPage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box>
      {/* Intro Section */}
      <Flex
        direction={isMobile ? "column" : "row"}
        align="center"
        justify="center"
        p={8}
        bgGradient="linear(to-b, gray.50, white)"
        color="black"
      >
        {/* Left Section */}
        <MotionBox
          flex={1}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          mb={{ base: 4, md: 0 }}
        >
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to AquaBills
          </Heading>
          <Text fontSize="xl" mb={8}>
            Your water billing solution for efficient management.
          </Text>
          <Button
            colorScheme="whiteAlpha"
            variant="outline"
            rightIcon={<FiArrowRightCircle />}
            size="lg"
            onClick={() => console.log("Explore clicked")}
          >
            Explore
          </Button>
        </MotionBox>

        {/* Right Section */}
        <MotionBox
          flex={1}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="https://images.mingming.dev/file/2ed9947d0e64213b38e0b.png"
            alt="AquaBills Dashboard"
            borderRadius="md"
            boxShadow="lg"
          />
        </MotionBox>
      </Flex>

      {/* Feature Section */}
      <Container maxW="container.xl" py={16}>
        <Heading as="h2" size="lg" textAlign="center" mb={10}>
          Key Features
        </Heading>
        <SimpleGrid
          columns={{
            base: 1,
            md: 3,
          }}
          spacing={10}
        >
          <VStack spacing={4}>
            <Icon as={FaMoneyBillAlt} boxSize={10} color="green.500" />
            <Text fontWeight="bold">Accurate Billing</Text>
            <Text textAlign="center">
              Experience hassle-free billing with pinpoint accuracy to ensure
              you're charged correctly every time.
            </Text>
          </VStack>
          <VStack spacing={4}>
            <Icon as={FaCheckCircle} boxSize={10} color="green.500" />
            <Text fontWeight="bold">Real-Time Usage Tracking</Text>
            <Text textAlign="center">
              Monitor your water usage in real time with our easy-to-use
              dashboard, helping you save water and money.
            </Text>
          </VStack>
          <VStack spacing={4}>
            <Icon as={FaLock} boxSize={10} color="green.500" />
            <Text fontWeight="bold">Secure Payment Processing</Text>
            <Text textAlign="center">
              Our secure payment system ensures your data is protected, making
              bill payments safe and simple.
            </Text>
          </VStack>
        </SimpleGrid>
      </Container>

      {/* About Section */}
      <Box bg="gray.50" py={12}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h3" size="md" mb={6}>
            About Us
          </Heading>
          <Text mb={4}>
            Our mission is to revolutionize water billing management through
            technology, ensuring efficiency, reducing errors, and enhancing
            customer satisfaction. We are grateful for the support from our
            partners and the dedication of our team.
          </Text>
          <Text fontWeight="bold">Technologies Used:</Text>
          <Text>React, Chakra UI, Node.js, MongoDB, AWS</Text>
          <Flex justifyContent="center" mt={8}>
            <Link href="mailto:contact@waterbilling.com" isExternal>
              <Button leftIcon={<FaMailchimp size="20" />} colorScheme="blue">
                Contact Us
              </Button>
            </Link>
          </Flex>
        </Container>
      </Box>

      {/* Optional Sections (FAQ and Newsletter Signup) */}
      <Container maxW="container.xl" py={16}>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          spacing={10}
        >
          {/* FAQ Section */}
          <Box>
            <Heading as="h4" size="md" mb={4}>
              Frequently Asked Questions
            </Heading>
            <Accordion allowMultiple>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontWeight="bold">How do I get started?</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Sign up on our platform, and you'll be guided through the
                  setup process.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontWeight="bold">Are my payments secure?</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Yes, we use the latest security protocols to ensure your
                  payments are completely secure.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          {/* Newsletter Signup */}
          <Box>
            <Heading as="h4" size="md" mb={4}>
              Stay Updated
            </Heading>
            <Text mb={4}>
              Subscribe to our newsletter for the latest updates and insights.
            </Text>
            <Stack as="form" spacing={3}>
              <Input placeholder="Your Email Address" />
              <Button colorScheme="blue" type="submit">
                Subscribe
              </Button>
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>
      {/* Footer */}
      <Footer />
    </Box>
  );
};
export default LandingPage;
