import {
  Box,
  Button,
  ButtonGroup,
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
  Image,
  Input,
  Stack,
  Link as CLink,
  Text,
  VStack,
  VisuallyHidden,
  useDisclosure,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { ALogo } from "../../assets";
import { FaFacebook, FaGoogle, FaTwitter, FaUser } from "react-icons/fa6";
import { PasswordField } from "../Auth/PasswordField";
import React, { useRef, useState } from "react";
import { useAuth } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";

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

  const loginForm = useRef(null);
  const { login, loading } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    target.email.value;
    target.password.value;

    await login(email, password);
    console.log("submitted");
  };

  const { user } = useAuth();
  const navigate = useNavigate();

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

          <DrawerBody pt={2} ref={loginForm}>
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
              <form id="login-form" onSubmit={handleSubmit}>
                <FormLabel htmlFor="username">Name</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="Type here..."
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormLabel htmlFor="password" pt={2}>
                  Password
                </FormLabel>
                <Input
                  type="password"
                  name="password"
                  placeholder="Type here..."
                />
              </form>
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
                isLoading={loading}
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
                <FormLabel htmlFor="id">National id</FormLabel>
                <Input id="govtId" type="text" placeholder="National ID" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" placeholder="Email Address" />
              </FormControl>
              <PasswordField />
            </Stack>
            <Stack spacing="6" pt={6}>
              <Button
                colorScheme="blue"
                variant="solid"
                rounded={20}
                border="2px"
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

const providers = [
  { name: "Google", icon: <FaGoogle /> },
  { name: "Twitter", icon: <FaTwitter /> },
  { name: "Twitter", icon: <FaFacebook /> },
];

export const OAuthButtonGroup = () => (
  <ButtonGroup variant="secondary" spacing="2">
    {providers.map(({ name, icon }) => (
      <Button
        key={name}
        flexGrow={1}
        colorScheme="blue"
        variant="outline"
        rounded={10}
        border="1px"
      >
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))}
  </ButtonGroup>
);
