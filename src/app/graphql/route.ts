import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { Resolvers } from "../../../apollo/__generated__/server/resolvers-types";
import { readFileSync } from "fs";
import { join } from "path";

const typeDefs = readFileSync(
  join(process.cwd(), "apollo/documents/schema.gql"),
  "utf-8"
);

const resolvers: Resolvers = {
  Query: {
    users() {
      return [{ name: "Nextjs" }, { name: "Nestjs" }, { name: "Sveltekit" }];
    },
  },
};

const apolloServer = new ApolloServer<Resolvers>({ typeDefs, resolvers });

const handler = startServerAndCreateNextHandler(apolloServer);

export const GET = async (request: Request) => handler(request);
export const POST = async (request: Request) => handler(request);
