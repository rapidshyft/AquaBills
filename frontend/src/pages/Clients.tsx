import { Box } from "@chakra-ui/react";
import LoginPage from "../components/Clients/myClients";
import ClientList from "../components/Clients/clientList";

const Clients = () => {
  return (
    <Box>
      <LoginPage />
      <ClientList />
    </Box>
  );
};

export default Clients;
