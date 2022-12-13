export function PostsShow(props) {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <p>{props.post.body}</p>
    </div>
  );
}