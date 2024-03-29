import React, { useState, useEffect } from "react";
import css from "./style.css";
import SinglePost from "../single-post";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";
import { QUERY_POSTS } from "../../utils/queries";
import Auth from "../../utils/auth";
import PostList from "../post-list";
import { useParams } from "react-router-dom";
import { QUERY_USER } from "../../utils/queries";

function UserPage(posts) {
  const [title, setTitle] = useState("");
  const [justify, setJustify] = useState("");

  const [postList, setPostList] = useState([]);
  const [addPost, { data, loading, error }] = useMutation(ADD_POST);
  // const { loading: loadingPosts, data: postData,refetch } =
  // useQuery(QUERY_POSTS);
  const {
    data: userData,
    loading: loadingPosts,
    refetch,
  } = useQuery(QUERY_USER, { variables: { username: Auth.getUsername() } });
  const allPosts = userData?.user.posts || [];

  // console.log(userData?.user.friendCount)

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addPost({
        variables: {
          title,
          postContent: justify,
        },
      });
      refetch();
      setTitle("");

      setJustify("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {Auth.loggedIn() && (
        <h2
          style={{
            textTransform: "capitalize",
            textAlign: "center",
            paddingTop: "20px",
          }}
        >
          Welcome {Auth.getUsername()}!
        </h2>
      )}
      <section id="outer__container">
        <div>
          {!Auth.loggedIn() && (
            <p style={{ color: "#774c2a", fontWeight: "light" }}>
              You need to be logged in, friend!
            </p>
          )}
          <form className="post-form" onSubmit={handleSubmit}>
            <h2 className="createNewpost">Create New Post</h2>
            <div>
              <label htmlFor="post-title">Title:</label>

              <input
                className="form-input"
                placeholder="What's up?"
                type="text"
                value={title}
                id="post-title"
                name="post-title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="content">Post</label>
              <textarea
                className="form-input"
                id="justify"
                placeholder="What would you like so share?"
                value={justify}
                name="justify"
                onChange={(e) => setJustify(e.target.value)}
              ></textarea>
            </div>
            <div className="merge">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>

        {loadingPosts ? <div>Loading...</div> : <PostList posts={allPosts} />}
        <br />
        {posts.postContent}
        {/* display list post- need to use .map method (postList) */}

        <br />
      </section>
    </>
  );
}
export default UserPage;
