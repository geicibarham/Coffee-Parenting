

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import './post-list.css'
import { ADD_VOTE } from '../../utils/mutations';
import { ADD_FLAG } from '../../utils/mutations';
import PostListCard from './post-list-card'
import { QUERY_POSTS } from "../../utils/queries";



const PostList = ({ username, posts, title }) => {
  const [addvote, { error }] = useMutation(ADD_VOTE)
  const [addFlag] = useMutation(ADD_FLAG)
  const handleVote = async (postId) => {
    console.log(postId)
    try {
      await addvote({
        variables: { postId },
        refetchQueries: [

          { query: QUERY_POSTS }, // DocumentNode object parsed with gql

          'post' // Query name

        ],
      })


    } catch (e) {
      console.log(e)
    }

  }

  const handleFlag = async (postId) => {
    console.log(postId)
    try {
      await addFlag({
        variables: { postId },
        refetchQueries: [

          { query: QUERY_POSTS }, // DocumentNode object parsed with gql

          'post' // Query name

        ],
      })
    } catch (e) {
      console.log(e)
    }
  }
  if (posts.length === 0) {
    return (
      <>
        < br />
        <h2> No posts yet!</h2>
      </>
    )
  }
  return (
    <section id="posts">
      <div>
        <h3>{title}</h3>

        {posts &&
          posts.map(post => (

            < PostListCard post={post} key={post._id}

              handleVote={handleVote} handleFlag={handleFlag} />


          ))}
      </div>
    </section>
  );
};

export default PostList;