export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={post.image} className="img-fluid rounded-start" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  <p className="card-text">{post.body}</p>
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
