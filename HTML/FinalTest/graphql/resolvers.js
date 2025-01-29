const axios = require('axios');

const resolvers = {
  Query: {
    books: () => books,
    getActivity: async (_, { type }) => {
      try {
        const response = await axios.get(`https://www.boredapi.com/api/activity?type=${type}`);
        return response.data;
      } catch (error) {
        throw new Error('Failed to fetch activity from Bored API');
      }
    },
  },
};

module.exports = resolvers;
