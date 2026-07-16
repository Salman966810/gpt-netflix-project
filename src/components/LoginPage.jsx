import { useState } from "react";
import bgImage from "../assets/bg.jpg"; // Adjust filename if needed
import Header from "./Header";

const LoginPage = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(true);

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

      <form className="absolute bg-black opacity-85 top-1/4 left-1/3 w-80 p-8  flex flex-col gap-4">
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
          type="email"
          placeholder="Enter Your Mail"
          className="border my-2 p-2"
        />

        <input
          type="text"
          placeholder="Enter Your Password"
          className="border my-2 p-2"
        />

        <button className="bg-red-700 text-white p-2 rounded cursor-pointer">
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
