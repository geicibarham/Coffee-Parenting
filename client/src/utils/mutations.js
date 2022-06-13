import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String! $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $bio: String) {
    addUser(username: $username, email: $email, password: $password, bio: $bio) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const EDIT_USER = gql`
mutation updateUser($username: String, $email: String, $bio: String) {
  updateUser(username: $username, email: $email, bio: $bio) {
    _id
    username
    email
    bio
  }
}`

export const ADD_POST = gql`
  mutation addPost($title: String!, $postContent: String!) {
    addPost(title: $title, postContent: $postContent) {
      _id
    title
    postContent
    createdAt
    username
    }
  }
`;

export const EDIT_POST = gql`
mutation editPost($postContent: String!, $title: String) {
  editPost(postContent: $postContent, title: $title) {
    _id
    title
    postContent
    deployedApplication
  }
}
`

export const ADD_FRIEND = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

export const ADD_COMMENT = gql`
mutation addComment($postId: ID!, $commentText: String!) {
  addComment(postId: $postId, commentText: $commentText) {
    _id
    title
    postContent
    createdAt
    username
    commentCount
    comments {
      commentText
      _id
      username
      createdAt
    }
  }
}
`

export const ADD_VOTE = gql`
mutation addVote($postId: ID!) {
  addVote(postId: $postId) {
    voteCount
    
  }
}`

export const ADD_FLAG = gql`
mutation addFlag($postId: ID!) {
  addFlag(postId: $postId) {
    flagCount
   
  }
}`
