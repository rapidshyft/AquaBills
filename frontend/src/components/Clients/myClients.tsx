import { useState, useEffect } from "react";
import { Box, Button, Input, VStack } from "@chakra-ui/react";
import { account, ID } from "../../utils/authConfig";
import { PasswordField } from "../Auth/PasswordField";

// Define the interface for the User object
interface AuthUser {
  name: string;
  // Add other properties as needed
}

const LoginPage = () => {
  const [loggedInUser, setLoggedInUser] = useState<AuthUser | null>(null); // Specify the type for loggedInUser
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    // Check if there's a logged-in user stored in localStorage
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    const session = await account.createEmailSession(email, password);
    const user = await account.get(); // Assuming this returns a User object
    setLoggedInUser(user);
    // Store the logged-in user in localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  };

  const register = async () => {
    await account.create(ID.unique(), email, password, name);
    login(email, password);
  };

  const logout = async () => {
    await account.deleteSession("current");
    setLoggedInUser(null);
    // Remove the logged-in user from localStorage
    localStorage.removeItem("loggedInUser");
  };

  if (loggedInUser) {
    return (
      <Box>
        <p>Logged in as {loggedInUser.name}</p>
        <Button onClick={logout}>Logout</Button>
      </Box>
    );
  }

  return (
    <Box>
      <p>Not logged in</p>
      <VStack spacing={4}>
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
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button onClick={() => login(email, password)}>Login</Button>
        <Button onClick={register}>Register</Button>
      </VStack>
    </Box>
  );
};

export default LoginPage;
