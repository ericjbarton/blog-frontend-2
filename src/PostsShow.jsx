export function PostsShow(props) {
  return (
    <div>
      <h1>Post Info</h1>
      <h3>Title: {props.post.title}</h3>
      <p>{props.post.body}</p>
    </div>
  );
}