import { Form, Link } from "react-router-dom";
import { GlobalContext} from "../context/GlobalState";
import { useContext, useEffect } from "react";
function Navbar() {
  const { likedImages, changeMode, mode  } = useContext(GlobalContext);
    const ChangeGlobalMode = () => {
      let newMode = mode === 'light' ? 'dark' : 'light'
      changeMode(newMode)
    }

   

  return (
    <div className="navbar container">
      <h1 className="logo"> My Unsplash Site</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
        <Link to="/likedimages">
          Liked-Images-
          <span className="badge">{likedImages.length}</span>
        </Link>
        <Link className="login" to='/login'>Login</Link>
        <button className="mode-btn" onClick={ChangeGlobalMode}>Change Mode👈</button>

      </nav>
    </div>
  );
}

export default Navbar;
