import axios from "axios"

export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.patch(`http://localhost:3000/posts/${props.post.id}.json`, params).then((response) => {
      console.log(response.data);
      props.onUpdatePost( props.post.id, params);
      event.target.reset();
    });
  };

  const handleClick = () => {
    props.onPostDestroy(props.post);
  };
  
  
  return (
    <div id="posts-show">
      <h1>{props.post.title}</h1>
      <img src={props.post.image}></img>
      <p>{props.post.body}</p>

      <h1>Update Post</h1>
      <form onSubmit={handleSubmit}><div>
    Title: <input defaultValue={props.post.title} name="title" type="text" />
      </div>
      <div>
    Gives us a verse, drop some knowledge: <input defaultValue={props.post.body} name="body" type="text" />
      </div>
      <div>
    Add an Image URL <input defaultValue={props.post.image} name="image" type="text" />
      </div>
      <button type="submit">Update Post</button>
      </form>
      <button onClick={handleClick}>Delete Post</button>
    </div>
  );  
}
