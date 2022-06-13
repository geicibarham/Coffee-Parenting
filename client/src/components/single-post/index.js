import React from "react";
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import css from '../post-list/post-list.css'
import Comment from "../comment";
import CommentForm from "../add-comment";
import Auth from '../../utils/auth'
import heart from '../../assets/images/heart.png'
import omg from '../../assets/images/omg.png'
import { ADD_VOTE } from '../../utils/mutations';
import { ADD_FLAG } from '../../utils/mutations';

function SinglePost(props) {
  const [addvote, { error }] = useMutation(ADD_VOTE)
  const [addFlag] = useMutation(ADD_FLAG)
  const { id: postId } = useParams();

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId }
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  const handleVote = async (postId) => {
    console.log(postId)
    try {
      await addvote({
        variables: { postId },
        refetchQueries: [

          { query: QUERY_POST }, // DocumentNode object parsed with gql

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

          { query: QUERY_POST }, // DocumentNode object parsed with gql

          'post' // Query name

        ],
      })
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      <section id="posts">
        <div>
          <div className="card mb-3">
          {post.title ? <p className="card-header"
                style={{ textAlign: "center", color: "white" }}>
                 {post.title}


            </p> : ''}
           
            <div className="card-body">

              <p className="mb-0">{post.postContent} /</p>
             
             
              <p>
                {post.username}&nbsp;
                posted on &nbsp;
                {post.createdAt}
              </p>

              <img onClick={handleVote} class="icon" style={{ height: "30px" }}
                src={heart} alt="heart icon fro likes" />&nbsp; &nbsp;
              <span >
                {post.voteCount ? post.voteCount : ''} </span>
              &nbsp;  &nbsp;



              <img class="icon" style={{ height: "30px" }} src={omg} 
                alt="heart icon fro likes" />
              <span >  &nbsp;
                {post.flagCount ? post.flagCount : ''} </span>
              &nbsp;  &nbsp;


            </div>
          </div>
        </div>
        {post.commentCount > 0 && <Comment comments={post.comments} />}
        {!Auth.loggedIn()&& <p style={{color:"#774c2a", fontWeight: "bold"}}>Only logged in users can comment, please sign up or login.</p>}
        {Auth.loggedIn() && <CommentForm postId={post._id} />}
      </section>
     
    </>
  );
}
export default SinglePost;
