import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
  query Posts {
  posts {
    _id
    title
    postContent
    username
    createdAt
    flags {
      _id
    }
    flagCount
  voteCount
  votes{
    _id
  }
    commentCount
    comments{
      _id
      username
      commentText
      createdAt
    }
  }

    }
  
`;

export const QUERY_POST = gql`
query Post($id: ID!) {
  post(_id: $id) {
    _id
    title
    postContent
    createdAt
    username
   voteCount
   flagCount
    commentCount
    comments {
      commentText
      username
      createdAt
    }
  }
}`;

export const QUERY_ME = gql`
  {
    me {
    _id
    username
    email
    friendCount
    post {
      _id
      title
      deployedApplication
      createdAt
      username
      commentCount
      flags {
        _id
        flagging
      }
      flagCount
      votes {
        _id
        post_id
        voting
      }
      voteCount
      comments {
        _id
        commentText
        username
        createdAt
      }
    }
  }
}`