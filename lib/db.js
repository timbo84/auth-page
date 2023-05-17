import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://eventcourse110406:sp6r4RjFJz8QvapU@cluster0.iads8bb.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client;
}
