import React, { useState, useEffect } from "react";
import css from "./style.css";
import SinglePost from "../single-post";
import dog from '../../assets/images/dog-cartoon.png'
import { useMutation, useQuery } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS } from "../../utils/queries";
import Auth from '../../utils/auth'
import PostList from '../post-list'

function UserPage() {
  const [title, setTitle] = useState('');
  const [justify, setJustify] = useState('');

  const [postList, setPostList] = useState([]);
  const [addPost, { data, loading, error }] = useMutation(ADD_POST);
  const { loading: loadingPosts, data: postData,refetch } = useQuery(QUERY_POSTS);
  const allPosts = postData?.posts || [];
  console.log('allPosts', allPosts);


  const handleSubmit = async (event) => {
    event.preventDefault();
  

    try {
      await addPost({
        variables: {
          title,
         postContent: justify,
         
         
        }
      })
      refetch()
      setTitle('');
     
     
      setJustify('');
    } catch (e) {
      console.log(e)
    }

  }

  useEffect(() => {

  }, [])
  const posts = async () => {
    const response = await fetch('user-page');
    setPostList(await response.json())
    
  }


  return (
    <>

      <div className='user-post-page'>


        
        <div>
        {!Auth.loggedIn() && <p style={{ color: "#774c2a", fontWeight: "light" }}>You need to be logged in, friend!</p>}
          <form className="post-form" onSubmit={handleSubmit}>
            <h1>Create New Post</h1>
            <div>
              <label htmlFor="post-title">Title:</label>
              <input className="form-input"  placeholder="What is going on?"
               type="text"  value={title}id="post-title" name="post-title"
               onChange={e => setTitle(e.target.value)} />
            </div>
          
          
            <div>
              <label htmlFor="content">Post</label>
              <textarea className="form-input" id="justify" 
               placeholder="What would you like so share?"
              value={justify}name="justify" 
              onChange={e => setJustify(e.target.value)}></textarea>
            </div>
            <div className='merge'>
              

              <button type="submit" className='btn'>
               Submit
              </button>
            </div>
          </form>
        </div>

        <div id="post">
          {loadingPosts ? (
            <div>Loading...</div>
          ) : (
            // <h1>post list displays below</h1>
            // <ol className='list'>
            //   {allPosts.map((data)=>{
            //     return(
            //       <li className='list-item' key={data._id}>{data.title}</li>
            //     )
            //   })}
            // </ol>
            <PostList posts={allPosts} />
          )}


          {/* display list post- need to use .map method (postList) */}

        </div>
      </div>


    </>

  );
}
export default UserPage;
