import LOGO from "../assets/LOGO.svg";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebaseConfig";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { USER_ICON } from "../../constants";

const Header = ({ isBrowse = false }) => {
  const dispatcher = useDispatch();
  const navigator = useNavigate();

  function handleSignOut() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatcher(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          }),
        );
        navigator("/browse");
      } else {
        dispatcher(removeUser());
        navigator("/");
      }
    });

    return () => unSubscribe();
  }, []);
  return (
    <header className=" fixed top-0 left-0 w-full flex justify-between  items-center bg-none px-8 py-6 z-20">
      <img src={LOGO} alt="Logo" className="w-48 h-auto" />

      {isBrowse && (
        <div className="flex items-center gap-4">
          <img
            src={USER_ICON} // replace with your icon
            alt="User"
            className="w-10 h-10 rounded-full"
          />

          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
