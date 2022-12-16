export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handleSubmit", params);
    props.onCreatePost(params)
    event.target.reset();
  };

 
  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
      Title: <input name="title" type="text" />
        </div>
        <div>
      Gives us a verse, drop some knowledge: <input name="body" type="text" />
        </div>
        <div>
      Put in a picture: <input name="image" type="text" />
        </div>
        <button type="submit">Create post</button>
      </form>
    </div>
  );
}