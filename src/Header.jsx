export function Header() {
  return (
    <header>
      <div><nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Bloggy McBlogSpace</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto"> <li className="nav-item active"> <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li> <li className="nav-item"> <a className="nav-link" href="/#Signup">Signup</a>
          </li>  <li className="nav-item">
            <a className="nav-link" href="#">Yep!</a> </li> </ul> <span className="navbar-text">
      The World's Greatest Gobbledygook </span>
        </div>
      </nav>
      </div>
      <br></br>
    </header>
  );
}


