import React from "react";
import { FcGoogle } from 'react-icons/fc'
import { signUpLogin } from "../components/firebase/firebaseConfig";
import { useGlobalContext } from '../hook/useGlobalContext'

function Login() {
    const { addUser, user } = useGlobalContext()
    const login = () => {
        signUpLogin()
        .then((result) => {
            console.log(result);
            addUser(result.user);
        })
        .catch((error) => {
            console.log(error);
        })
    }
  return (
    <div className="wrapper">
     {!user &&  <h1>Login With Google Account 👉</h1>}
     {
        user && <div className="user-card">
            <h1>{user.displayName}</h1>
            <img className="user-img" src={user.photoURL} alt="" />
        </div>
     }
      <button onClick={login} className="button">
        <span className="button-inner">
          <FcGoogle />
          <span>Google</span>
        </span>
      </button>
    </div>
  );
}

export default Login;
