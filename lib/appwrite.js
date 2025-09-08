import { Client, Account, ID, Avatars} from "react-native-appwrite";

export const client = new Client()
  .setEndpoint("https://nyc.cloud.appwrite.io/v1") // Your Appwrite endpoint
  .setProject("68aad6e300032fd64504") // Your project ID
  .setPlatform("com.example.reactshop"); // Your package name or bundle identifier

export const account = new Account(client);
export const avatars = new Avatars(client);
