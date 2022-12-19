import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { PostsNew } from "./PostsNew";



export function Home() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    console.log("handleIndexPosts");
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleShowPost = (post) => {
    console.log("handleShowPost", post);
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsPostsShowVisible(false);
  };
  
  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      setPosts([...posts, response.data])
    });
  };

  const handleUpdatePost = (id, params) => {
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then((response) => {
      setPosts(
        posts.map((post) => {
          if (post.id === response.data.id) {
            return response.data; 
          } else {
            return post;
          }
        }
        )
      );
      handleClose()
    });
  };

  useEffect(handleIndexPosts, []);

  const handleDestroyPost = (post) => { axios.delete(`http://localhost:3000/posts/${post.id}.json`).then(response => {
    setPosts(posts.filter((p) => p.id !== post.id));
    handleClose();
    });
  }
  
  return (
    <div className="container" >
      <Signup />
      <Login />
      < PostsIndex posts={posts} onShowPost={handleShowPost} />
      < PostsNew onCreatePost={handleCreatePost} />
      <Modal show={isPostsShowVisible} onClose={handleClose} >
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onPostDestroy={handleDestroyPost} />
      </Modal>
    </div>
  );
}