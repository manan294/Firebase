import { useState } from "react";
import { app } from "./firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Link } from "react-router-dom";

const auth = getAuth(app);

export default function SignUp() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, input.email, input.password)
      .then(() => console.log("User Created"))
      .catch((Err) => console.log(Err));
    setInput({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <h2>SignUp Form</h2>
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
      Already User ? <Link to="/signIn">SignIn</Link>
    </div>
  );
}
