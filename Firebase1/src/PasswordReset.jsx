import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { app } from "./firebase";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

export default function PasswordReset() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const resetLinkFun = (e) => {
    e.preventDefault();
    // console.log(email);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Reset Verification Link Sent");
        setMsg("Successfully Password Reset Link Sent to Your Email Address");
      })
      .catch((Err) => console.log(Err));
    setEmail("");
  };
  return (
    <div>
      {msg && <p>{msg}</p>}
      <form onSubmit={resetLinkFun}>
        <input
          type="email"
          placeholder="Enter Recovery Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button>Send Reset Link</button>
      </form>
      <br />
      <Link to="/signIn">Return to SignIn</Link>
    </div>
  );
}
