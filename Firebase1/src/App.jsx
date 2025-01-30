import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import PasswordReset from "./PasswordReset";
import { useEffect, useState } from "react";
import { app } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Demo from "./Demo";

const auth = getAuth(app);

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);
  // console.log(user);
  // console.log(user.email);
  return (
    <div>
      {user ? (
        <Demo email={user.email} />
      ) : (
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/resetPassword" element={<PasswordReset />} />
        </Routes>
      )}
    </div>
  );
}
