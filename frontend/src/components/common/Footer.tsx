import {
  Container,
  Stack,
  ButtonGroup,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa6";
import { ALogo } from "../../assets";

const Footer = () => {
  return (
    <Container as="footer" role="contentinfo" maxW={"7xl"}>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack justify="space-between" direction="row" align="center">
          <Image src={ALogo} alt="AquaBills Logo" width="50px" height="auto" />
          <ButtonGroup variant="tertiary">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
            />
            <IconButton
              as="a"
              href="https://github.com/LwaziNcubeX/"
              aria-label="GitHub"
              icon={<FaGithub />}
            />
            <IconButton
              as="a"
              href="https://twitter.com/lwazincubex"
              aria-label="Twitter"
              icon={<FaTwitter />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="fg.subtle">
          &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights
          reserved.
        </Text>
      </Stack>
    </Container>
  );
};

export default Footer;
