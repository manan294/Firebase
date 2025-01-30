import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { app } from "./firebase";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

export default function SignIn() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, input.email, input.password)
      .then(() => console.log("User SignIn"))
      .catch((Err) => console.log(Err));
    setInput({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <h2>SigIn Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        <br />
        <br />
        <button type="submit">SignUp</button>
      </form>
      Forgot Password ? <Link to="/resetPassword">Click Here</Link>
      <br />
      Not User ? <Link to="/">SignUp Here</Link>
    </div>
  );
}
