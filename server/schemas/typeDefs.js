const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String,
    bookCount: Int,
    savedBooks: [Book]
  }
  
  type Book {
    bookId: String
    title: String
    description: String
    authors: [String]
    image: String
    link: String
  }
  
  # Set up an Auth type to handle returning data from a profile creating or user login
  type Auth {
    token: ID!
    user: User
  }
  
  # Makes it easier when saving a book
  # https://graphql.org/graphql-js/mutations-and-input-types/
  input BookInput {
    bookId: String
    title: String
    description: String
    authors: [String]
    image: String
    link: String
  }

  type Query {
    users: [User]!
  }
  
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: BookInput!): User
    deleteBook(bookID: ID!): User
  }
`;

module.exports = typeDefs;
