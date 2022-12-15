export function Header() {
  return (
    <header>
      <div><nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Bloggy McBlogSpace</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto"> <li class="nav-item active"> <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li> <li class="nav-item"> <a class="nav-link" href="#">Features</a>
          </li>  <li class="nav-item">
            <a class="nav-link" href="#">Yep!</a> </li> </ul> <span class="navbar-text">
      The World's Greatest Gobbledygook </span>
        </div>
      </nav>
      </div>
    </header>
  );
}