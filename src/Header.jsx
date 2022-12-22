import axios from "axios";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { useState } from "react";
import { Link } from "react-router-dom";


export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  const handleSignupClose = () => { setIsSignupVisible(false);
  };

  const handleLoginShow = () => {
    setIsLoginVisible(true);
  };

  const handleLoginClose = () => {
    setIsLoginVisible(false);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
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
        {localStorage.jwt === undefined ?
          <>
            <li className="nav-item"><a onClick={handleLoginShow} href="#"> Login</a></li>
        &nbsp;&nbsp;&nbsp; <li className="nav-item"><a onClick={handleSignupShow} href="#">Signup</a>
            </li>
          </> :
          <li className="nav-item"><a onClick={handleLogout} href="#">Logout</a>
          </li>
        }
      </nav>
      <Modal show={isSignupVisible} onClose={handleSignupClose}> < Signup /> </Modal>

      <Modal show={isLoginVisible} onCLose={handleLoginClose}>< Login /></Modal>
      </div>
      <br></br>
    </header>
  );
}


