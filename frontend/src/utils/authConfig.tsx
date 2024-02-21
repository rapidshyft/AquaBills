import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65c7eeed98258e24896e");

export const account = new Account(client);
export { ID } from "appwrite";
