import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: "http://192.168.1.68:5174",
    cache: new InMemoryCache(),
});

export default client;