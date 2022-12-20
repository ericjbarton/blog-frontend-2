export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <div className="card-group bg-transparent">
            <div className="row g-0">
              <div className="col-md-5">
                <img src={post.image} className="img-fluid rounded-start" />
              </div>
              <div className="col-md-1">
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
               
                  <br />
                  <button onClick={() => props.onShowPost(post)}>MORE INFO</button>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
