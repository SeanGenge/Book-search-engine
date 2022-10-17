import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
        bookCount
        savedBooks {
          bookId
          title
          description
          authors
          image
          link
        }
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
        bookCount
        savedBooks {
          bookId
          title
          description
          authors
          image
          link
        }
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: BookInput!) {
    saveBook(input: $input) {
      _id
      username
      email
      password
      bookCount
      savedBooks {
        bookId
        title
        description
        authors
        image
        link
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($bookID: ID!) {
    deleteBook(bookID: $bookID) {
      _id
      username
      email
      password
      bookCount
      savedBooks {
        bookId
        title
        description
        authors
        image
        link
      }
    }
  }
`;