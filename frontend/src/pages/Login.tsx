import {
  Box,
  Container,
  Button,
  ButtonGroup,
  VisuallyHidden,
  Flex,
} from "@chakra-ui/react";
import { FaGoogle, FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  return (
    <Flex>
      <Box bg={"green"}>5</Box>
      <Box bg={"red"}>5</Box>
    </Flex>
  );
};

export default Login;

const providers = [
  { name: "Google", icon: <FaGoogle /> },
  { name: "Twitter", icon: <FaTwitter /> },
  { name: "Twitter", icon: <FaFacebook /> },
];

export const OAuthButtonGroup = () => (
  <ButtonGroup variant="secondary" spacing="4">
    {providers.map(({ name, icon }) => (
      <Button
        key={name}
        flexGrow={1}
        colorScheme="blue"
        variant="outline"
        rounded={20}
        border="1px"
      >
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))}
  </ButtonGroup>
);

// Image by <a href="https://www.freepik.com/free-vector/flat-design-polygonal-background_13163851.htm#query=abstract%20backround&position=21&from_view=search&track=ais&uuid=2fcd708b-45f1-4ebd-ba05-9a89dd7b468c">Freepik</a>
