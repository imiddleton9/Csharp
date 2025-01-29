import { ApolloServer } from "@apollo/server";
import{ startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./typeDefs.js";
import{ resolvers } from "./resolvers.js";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const DB =process.env.MONGODB
   
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "recipe_app",
});

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server,{
    listen: { port: 5174 },
});

console.log(`Server ready at: ${url}`);