import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { useState } from "react";
import { Link } from "react-router-dom";


export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupVisible(true);

    const handleSignupClose = () => { setIsSignupVisible(false) }
  };
  return (

    <header>
      <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Bloggy McBlogSpace</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> 
        <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/about">About</Link>&nbsp;&nbsp;&nbsp;

        <Link to="/login">Login</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/signup">Signup</Link>
      </nav>
      </div>
      <br></br>
    </header>
  );
}


