import {
  Avatar,
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
  Flex,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  Link as CLink,
  Text,
  VStack,
  VisuallyHidden,
  useDisclosure,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { ALogo } from "../../assets";
import {
  FaChevronDown,
  FaFacebook,
  FaGoogle,
  FaTwitter,
  FaUser,
} from "react-icons/fa6";
import { FaBell, FaSearch } from "react-icons/fa";
import { NavTabs, PasswordField } from "..";
import "./styles.css";

const Navbar = ({ showNavTabs = true, showMenuItems = true }) => {
  return (
    <Box p={2}>
      <Flex>
        <Image src={ALogo} alt="AquaBills Logo" width="50px" height="auto" />
        <Spacer />
        {showNavTabs && <NavTabs />}
        <Spacer />
        <Box>{showMenuItems ? <MenuItems /> : <MenuItems2 />}</Box>
      </Flex>
    </Box>
  );
};

const MenuItems = () => {
  return (
    <Box>
      <HStack spacing={{ base: "0", md: "6" }}>
        <HStack spacing={0}>
          <IconButton
            size="lg"
            variant="outline"
            aria-label="search icon"
            icon={<FaSearch />}
            rounded={"full"}
            bg={"gray.300"}
          />
          <IconButton
            size="lg"
            variant="outline"
            aria-label="Notifications"
            icon={<FaBell />}
            rounded={"full"}
            bg={"gray.300"}
          />
        </HStack>

        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton py={2}>
              <Stack direction={"row"} alignItems={"center"}>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1615572359976-1fe39507ed7b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Lwazi Ncube</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FaChevronDown />
                </Box>
              </Stack>
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Box>
  );
};

const MenuItems2 = () => {
  return (
    <Box>
      <Stack direction="row" spacing={4}>
        <Login />
      </Stack>
    </Box>
  );
};

function Login() {
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

  return (
    <>
      <Button
        leftIcon={<FaUser />}
        colorScheme="blue"
        variant="outline"
        rounded={20}
        border="2px"
        onClick={onOpen}
      >
        My Account
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody pt={2}>
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
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" placeholder="Email Address" />
              </FormControl>
              <PasswordField />
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

              <OAuthButtonGroup />
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
}
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

export default Navbar;
