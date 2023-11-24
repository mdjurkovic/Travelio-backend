import { port, uri } from "./config/environment";
import express from "express";
import apolloServer from "./graphql";
import connectDB from "./db";

const app = express();

try {
  apolloServer.start().then((r) => {
    apolloServer.applyMiddleware({
      app,
    });
    console.log("Connecting to db");
    connectDB().then(() => {
      console.log("Connected to db");
      app.listen(port);
      console.log(`🚀  GraphQL server running at ${uri}:${port}/graphql`);
    });
  });
} catch {
  console.log("Not able to run GraphQL server");
}
