import { Account, Client, Databases } from "appwrite";

const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1');
client.setProject('66bf6561001037ea70d5');


export const account = new Account(client);
export const databases = new Databases(client);