/* eslint-disable react/prop-types */
import { app } from "./firebase";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(app);

export default function Demo({ email }) {
  const signOutFun = () => {
    signOut(auth)
      .then(() => console.log("User Signed Out"))
      .catch((Err) => console.log(Err));
  };

  return (
    <div>
      <h1>Demo Component</h1>
      <h3>{email}</h3>
      <button onClick={signOutFun}>SignOut</button>
    </div>
  );
}
