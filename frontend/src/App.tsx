import { Box } from "@chakra-ui/react";
import {
  Clients,
  History,
  Navbar,
  Overview,
  Reports,
  Settings,
  Sidebar,
} from "./components";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const items = ["List1", "List2", "List3", "List4"];
  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Box as="main">
        <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/billing-history" element={<History />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        {/* <Sidebar items={items} heading="Lists" /> */}
      </Box>
    </Box>
  );
};

export default App;
