import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavTabs = () => {
  return (
    <Box py={2}>
      <Tabs
        variant="solid-rounded"
        colorScheme="blue"
        bg={"gray.300"}
        rounded={"full"}
      >
        <TabList p={1}>
          <Tab as={Link} to="/overview">
            Overview
          </Tab>
          <Tab as={Link} to="/billing-history">
            Billing History
          </Tab>
          <Tab as={Link} to="/clients">
            Clients
          </Tab>
          <Tab as={Link} to="/reports">
            Reports
          </Tab>
          <Tab as={Link} to="/settings">
            Settings
          </Tab>
        </TabList>
      </Tabs>
    </Box>
  );
};

export default NavTabs;
