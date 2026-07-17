import { BrowserRouter, Routes, Route } from "react-router-dom";
import Browse from "./Browse";
import LoginPage from "./LoginPage";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const BodyContainer = () => {
  const dispatcher = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, phoneNumber , photoURL } = user;
        dispatcher(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            phoneNumber: phoneNumber,
            photoURL:photoURL
          }),
        );
      } else {
        dispatcher(removeUser());
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BodyContainer;
