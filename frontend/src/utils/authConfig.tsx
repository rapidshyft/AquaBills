import { Client, Account } from "appwrite"; // Import the Account object from the appwrite package

// Initialize Appwrite

const client = new Client();

client.setEndpoint("").setProject("");

const account = new Account(client); // Create an instance of the Account object

export { client, account };
