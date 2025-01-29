import { ApolloServer, gql } from 'apollo-server';
import axios from 'axios';

// Define custom types for the Activity object
const activityTypeDefs = gql`
  type Activity {
    activity: String
    type: String
    participants: Int
    price: Float

    key: ID!
  }
`;

// GraphQL schema
const typeDefs = gql`
  ${activityTypeDefs}

  type Query {
    getActivityByType(type: String!): [Activity]
  }
`;

// Resolvers
const resolvers = {
  Query: {
    getActivityByType: async (_, { type }) => {
      try {
        const response = await axios.get(`https://www.boredapi.com/api/activity?type=${type}`);
        return [response.data];
      } catch (error) {
        console.error(error);
      }
    },
  },
};

// Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
