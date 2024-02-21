import {
  AbsoluteCenter,
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  VStack,
  Text,
  Image,
  Link as CLink,
  useDisclosure,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa6";
import { PasswordField } from "../Auth/PasswordField";
import { useState } from "react";
import { useAuth } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import { ALogo } from "../../assets";

export const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isSignUpOpen,
    onOpen: onSignUpOpen,
    onClose: onSignUpClose,
  } = useDisclosure();

  const toggleSignUp = () => {
    onClose(); // Close the login drawer
    onSignUpOpen(); // Open the sign-up drawer
  };

  const { user, login, register } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(email, password);
      onClose(); // Close the login drawer
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleRegister = async () => {
    try {
      await register(email, password, name);
      onClose(); // Close the sign-up drawer
    } catch (error) {
      console.error("Registration error:", error);
      onClose();
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      {user ? (
        <Button
          leftIcon={<FaUser />}
          colorScheme="blue"
          variant="outline"
          rounded={20}
          border="2px"
          onClick={() => navigate("/overview")}
        >
          My Account
        </Button>
      ) : (
        <Button
          leftIcon={<FaUser />}
          colorScheme="blue"
          variant="outline"
          rounded={20}
          border="2px"
          onClick={onOpen}
        >
          Login
        </Button>
      )}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <VStack pt={4} pb={8}>
              <Image
                src={ALogo}
                alt="AquaBills Logo"
                width="40px"
                height="auto"
              />
              <Text fontSize={"larger"} fontWeight={"bold"}>
                Login to Your Account
              </Text>
              <CreateAccount onSignUp={toggleSignUp} />
            </VStack>
            <Stack spacing="24px" pt={2}>
              <FormControl>
                <FormLabel>Email address</FormLabel>

                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <PasswordField
                  value={password} // Pass the password state to PasswordField component
                  onChange={(e) => setPassword(e.target.value)} // Pass the setPassword function to PasswordField component
                />
              </FormControl>
            </Stack>
            <HStack justify="space-between" pt={3} pb={6}>
              <Checkbox defaultChecked size="sm">
                Remember me
              </Checkbox>
              <Button variant="text" size="xs" textColor={"red"}>
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button
                colorScheme="blue"
                variant="solid"
                rounded={20}
                border="2px"
                type="submit"
                form="login-form"
                onClick={handleLogin}
              >
                Sign in
              </Button>

              <Box position="relative" py={4}>
                <Divider />
                <AbsoluteCenter>
                  <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                    or continue with
                  </Text>
                </AbsoluteCenter>
              </Box>

              {/* <OAuthButtonGroup /> */}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* Sign Up Drawer */}
      <Drawer isOpen={isSignUpOpen} placement="right" onClose={onSignUpClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create Account</DrawerHeader>
          <DrawerBody>
            <Stack spacing="12px" pt={2}>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <PasswordField
                  value={password} // Pass the password state to PasswordField component
                  onChange={(e) => setPassword(e.target.value)} // Pass the setPassword function to PasswordField component
                />
              </FormControl>
            </Stack>
            <Stack spacing="6" pt={6}>
              <Button
                colorScheme="blue"
                variant="solid"
                rounded={20}
                border="2px"
                onClick={handleRegister}
              >
                Submit
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

interface CreateAccountProps {
  onSignUp: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

function CreateAccount({ onSignUp }: CreateAccountProps) {
  return (
    <>
      <Text color="fg.muted">
        Don't have an account?{" "}
        <CLink style={{ color: "blue" }} onClick={onSignUp}>
          Sign up
        </CLink>
      </Text>
    </>
  );
}
