import { useState, useRef } from "react";
import bgImage from "../assets/bg.jpg"; 
import Header from "./Header";
import { validation } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";

const LoginPage = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(true);
  const [emailOrPwErrorMsg, setEmailOrPwErrorMsg] = useState("");

  const email = useRef(null);
  const password = useRef(null);

  const handleFormValidation = () => {
    const msg = validation(email.current.value, password.current.value);
    setEmailOrPwErrorMsg(msg);

    if (msg) return;
    if (!isSignUpForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setEmailOrPwErrorMsg(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("signed/Login successfully");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setEmailOrPwErrorMsg(errorCode + " " + errorMessage);
        });
    }
  };

  function handleFormState() {
    setIsSignUpForm(!isSignUpForm);
  }

  return (
    <div className="relative">
      <img
        src={bgImage}
        alt="Background"
        className="w-full h-screen object-cover"
      />
      <Header />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black opacity-85 top-1/6 left-1/3 w-80 p-8  flex flex-col gap-4"
      >
        <h5 className="text-3xl font-extrabold">
          {isSignUpForm ? "Sign In" : "Sign Up"}
        </h5>

        {!isSignUpForm && (
          <input
            type="text"
            placeholder="Enter Your Name"
            className="border my-4 p-2"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Enter Your Mail"
          className="border my-2 p-2"
        />

        <input
          ref={password}
          type="password"
          placeholder="Enter Your Password"
          className="border my-2 p-2"
        />

        <p className="font-bold text-xs text-red-500">{emailOrPwErrorMsg}</p>

        <button
          onClick={handleFormValidation}
          className="bg-red-950 text-white p-2 rounded cursor-pointer"
        >
          {isSignUpForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-sm">
          {isSignUpForm ? "New To Netflix ? " : "Already Have An Account ? "}
          <span
            onClick={handleFormState}
            className="cursor-pointer text-red-600"
          >
            {isSignUpForm ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
