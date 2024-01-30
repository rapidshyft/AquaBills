import { Box } from "@chakra-ui/react";
import { Navbar, Sidebar } from "./components";

const App = () => {
  const items = ["List1", "List2", "List3", "List4"];
  return (
    <Box>
      <Box>
        <Navbar/>
      </Box>
      <Box as="main">
        <Sidebar items={items} heading="Lists" />
      </Box>
    </Box>
  );
};

export default App;
