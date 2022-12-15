export function PostsIndex (props) {
  console.log(props);
  return ( 
    // <div id="posts-index">
    //   <h1>All Posts</h1>
    //   {props.posts.map((post) => (
    //     <div key={post.id}>
    //       <h2>{post.title}</h2>
    //       <a href="PostsShow"><img src={post.image}/></a>
    //       <br></br>
    //       <button onClick={() => props.onShowPost(post)}>More Info</button>
    //     </div>
    //   ))} 

<div className="card-group">
        <div className="card" >
          <img src="src/assets/pattern-11.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text">
            </p>
            <p className="card-text"><small className="text-muted"></small></p>
          </div>
        </div>

            {props.posts.map((post) => (
              <div key={post.id} className="posts">
                <h2>{post.title}</h2>
                <h4>{post.body}</h4>
                <img src={post.image} alt="" />
                <button className="btn btn-info" onClick={ () => props.onSelectpost(post) }>MORE INFO</button>
              </div>
            ))}
      </div>
    // </div>
  // );
)}