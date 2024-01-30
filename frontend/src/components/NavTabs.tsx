import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";

const NavTabs = () => {
  return (
    <Box py={2}>
      <Tabs
        variant="soft-rounded"
        colorScheme="blue"
        bg={"gray.300"}
        rounded={"full"}
      >
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Billing History</Tab>
          <Tab>Invoices</Tab>
          <Tab>Settings</Tab>
        </TabList>
      </Tabs>
    </Box>
  );
};

export default NavTabs;
