import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { Modal } from "./Modal";


export function Home() {
  const [posts, setPosts] = useState([]);
  const handleIndexPosts = () => {
    console.log("handleIndexPosts");
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  }
  useEffect(handleIndexPosts, []);
  
  return (
    <div>
      < PostsIndex posts={posts}/>
      <Modal show={true} >
        <h1>Test</h1>
      </Modal>
    </div>
  );
}