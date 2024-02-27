import "./auth.css";
import logo from "../../assets/amazon-logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { useState, useContext } from "react";
import { auth } from "../../utility/firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { ClipLoader } from "react-spinners";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Type } from "../../utility/action.type";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();
  // console.log(navStateData);
  // console.log(user);
  const authHandler = async (e) => {
    e.preventDefault();
    try {
      if (e.target.name === "signup") {
        setLoading({ ...loading, signUp: true });
        await createUserWithEmailAndPassword(auth, email, password).then(
          (userInfo) => {
            console.log("User signed up successfully!");
            dispatch({
              type: Type.SET_USER,
              user: userInfo.user,
            });
            setLoading({ ...loading, signUp: false });
            navigate("/");
          }
        );
      } else {
        setLoading({ ...loading, signIn: true });
        await signInWithEmailAndPassword(auth, email, password).then(
          (userInfo) => {
            console.log("User signed in successfully!");
            dispatch({
              type: Type.SET_USER,
              user: userInfo.user,
            });
            setLoading({ ...loading, signIn: false });
            navigate("/");
          }
        );
      }
    } catch (error) {
      setError(error.message); // Update state to display error message in UI
      setLoading({ ...loading, signUp: false });
    }
  };

  return (
    <div>
      <section className="authentication-section">
        <Link to="/">
          <img src={logo} alt="Amazon Clone Logo" className="logo" />
        </Link>
        <h1>Sign In</h1>
        <form className="authentication-form" action="#">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" onClick={authHandler} className="btn login-btn">
            {loading.signIn ? <ClipLoader color="#000" size={15} /> : "Sign In"}
          </button>
          <button
            type="submit"
            name="signup"
            onClick={authHandler}
            className="btn signup-btn"
          >
            {loading.signUp ? <ClipLoader color="#000" size={15} /> : "Sign Up"}
          </button>
          <br />
          <br />
          {error && <small style={{ color: "red" }}>{error}</small>}
        </form>
        <p className="description">
          By continuing, you agree to Amazon Clone's Terms of Service and
          Privacy Policy.
        </p>
      </section>
    </div>
  );
};

export default Auth;
