import LOGO from "../assets/LOGO.svg";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebaseConfig";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
const Header = ({ isBrowse = false }) => {
  const navigator = useNavigate();
  const user = useSelector((store) => store.user)

  console.log( user)

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        navigator("/");
      })
      .catch((error) => {});
  }
  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-6 z-10">
      <img src={LOGO} alt="Logo" className="w-48 h-auto" />

      {isBrowse && (
        <div className="flex items-center gap-4">
          <img
             src={LOGO}// replace with your icon
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
