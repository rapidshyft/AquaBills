import React from "react";
import {
  Box,
  Heading,
  Divider,
  VStack,
  FormControl,
  FormLabel,
  Switch,
  Select,
  Input,
  Button,
  Textarea,
  Container,
  HStack,
  Spacer,
} from "@chakra-ui/react";

const Settings = () => {
  return (
    <Box as={Container} p={6} maxW={"7xl"}>
      <Divider mb={6} />
      <VStack spacing={6} align="start">
        {/* General Settings */}
        <Heading size="md">General Settings</Heading>
        <FormControl as={HStack} alignItems={"center"}>
          <FormLabel htmlFor="language-select" mb="0">
            System Language
          </FormLabel>
          <Spacer />
          <Select
            id="language-select"
            placeholder="Select language"
            width={"300px"}
          >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Currency Settings</FormLabel>
          <Input placeholder="USD" />
        </FormControl>
        <FormControl as={HStack} alignItems={"center"}>
          <FormLabel>Date and Time Format</FormLabel>
          <Spacer />
          <Select placeholder="Select format" width={"300px"}>
            <option value="dd/mm/yyyy">DD/MM/YYYY</option>
            <option value="mm/dd/yyyy">MM/DD/YYYY</option>
            <option value="yyyy/mm/dd">YYYY/MM/DD</option>
          </Select>
        </FormControl>

        {/* Billing Settings */}
        <Heading size="md">Billing Settings</Heading>
        <FormControl>
          <FormLabel>Tariff Management</FormLabel>
          <Textarea placeholder="Define tariff structures..." />
        </FormControl>
        <FormControl as={HStack} alignItems={"center"}>
          <FormLabel>Billing Frequency</FormLabel>
          <Spacer />
          <Select placeholder="Select frequency" width={"300px"}>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="annually">Annually</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Late Payment Penalties</FormLabel>
          <Input type="number" placeholder="Percentage or fixed fee" />
        </FormControl>
        <FormControl>
          <FormLabel>Billing Thresholds</FormLabel>
          <Input type="number" placeholder="Define thresholds" />
        </FormControl>
        <FormControl>
          <FormLabel>Discount Rules</FormLabel>
          <Textarea placeholder="Define discount rules..." />
        </FormControl>

        {/* User Preferences */}
        <Heading size="md">User Preferences</Heading>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="notifications-switch" mb="0">
            Enable Notifications
          </FormLabel>
          <Switch id="notifications-switch" defaultChecked />
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="email-switch" mb="0">
            Receive Email Updates
          </FormLabel>
          <Switch id="email-switch" defaultChecked />
        </FormControl>
        <FormControl alignItems={"center"}>
          <FormLabel htmlFor="theme-switch" mb="0">
            Dark Mode
          </FormLabel>
          <Spacer />
          <Switch id="theme-switch" defaultChecked />
        </FormControl>

        {/* System Maintenance */}
        <Heading size="md">System Maintenance</Heading>
        <HStack>
          <Button colorScheme="blue" size="sm">
            System Updates
          </Button>
          <Button colorScheme="teal" size="sm">
            Data Management
          </Button>
        </HStack>

        {/* Help and Support */}
        <Heading size="md">Help and Support</Heading>
        <HStack>
          <Button colorScheme="purple" size="sm">
            Documentation
          </Button>
          <Button colorScheme="orange" size="sm">
            Contact Support
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Settings;
