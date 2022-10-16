const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    }
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const newUser = await User.create({ username, email, password });
      const token = signToken(newUser);
      
      return { token, newUser };
    }
  }
};

module.exports = resolvers;
