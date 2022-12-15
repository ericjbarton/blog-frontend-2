export function PostsIndex (props) {
  console.log(props);
  return ( 
    <div id="posts-index">
      <h1>All Posts</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <a href="PostsShow"><img src={post.image}/></a>
          <br></br>
          <button onClick={() => props.onShowPost(post)}>More Info</button>
        </div>
      ))} 
    </div>
  );
}