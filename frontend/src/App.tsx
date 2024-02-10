import { Box } from "@chakra-ui/react";
import {
  Clients,
  History,
  Navbar,
  Overview,
  Reports,
  Settings,
} from "./components";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";

const App = () => {
  const items = ["List1", "List2", "List3", "List4"];
  const routes = [
    "/overview",
    "/billing-history",
    "/clients",
    "/reports",
    "/settings",
  ];
  return (
    <Box>
      <Box>
        <Routes>
          <Route
            path="/"
            element={<Navbar showNavTabs={false} showMenuItems={false} />}
          />
          {routes.map((route) => (
            <Route key={route} path={route} element={<Navbar />} />
          ))}
        </Routes>
      </Box>
      <Box as="main">
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/overview" element={<Overview />} />
            <Route path="/billing-history" element={<History />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
        {/* <Sidebar items={items} heading="Lists" /> */}
      </Box>
    </Box>
  );
};

export default App;
