import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  });

  const handleSignup = () => {
    if (!signupData.name || !signupData.email || !signupData.password) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("user", JSON.stringify(signupData));
    navigate("/dashboard");
  };

  const handleSignin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No user found. Please sign up first.");
      return;
    }

    if (
      signinData.email === storedUser.email &&
      signinData.password === storedUser.password
    ) {
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="relative w-[850px] h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden flex">
      
      {/* 🔹 SIGN IN */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full p-10 flex flex-col justify-center transition-all duration-700 ${
          isSignup ? "opacity-0 pointer-events-none -translate-x-10" : "opacity-100 z-10"
        }`}
      >
        <h2 className="text-3xl font-bold mb-6">Sign In</h2>

        <input
          type="email"
          placeholder="Email"
          value={signinData.email}
          onChange={(e) =>
            setSigninData({ ...signinData, email: e.target.value })
          }
          className="mb-4 p-3 bg-gray-100 rounded-xl"
        />

        <input
          type="password"
          placeholder="Password"
          value={signinData.password}
          onChange={(e) =>
            setSigninData({ ...signinData, password: e.target.value })
          }
          className="mb-4 p-3 bg-gray-100 rounded-xl"
        />

        <button
          onClick={handleSignin}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-xl hover:scale-105 transition"
        >
          Sign In
        </button>
      </div>

      {/* 🔹 SIGN UP */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full p-10 flex flex-col justify-center transition-all duration-700 ${
          isSignup ? "opacity-100 z-10" : "opacity-0 pointer-events-none translate-x-10"
        }`}
      >
        <h2 className="text-3xl font-bold mb-6">Sign Up</h2>

        <input
          type="text"
          placeholder="Name"
          value={signupData.name}
          onChange={(e) =>
            setSignupData({ ...signupData, name: e.target.value })
          }
          className="mb-4 p-3 bg-gray-100 rounded-xl"
        />

        <input
          type="email"
          placeholder="Email"
          value={signupData.email}
          onChange={(e) =>
            setSignupData({ ...signupData, email: e.target.value })
          }
          className="mb-4 p-3 bg-gray-100 rounded-xl"
        />

        <input
          type="password"
          placeholder="Password"
          value={signupData.password}
          onChange={(e) =>
            setSignupData({ ...signupData, password: e.target.value })
          }
          className="mb-4 p-3 bg-gray-100 rounded-xl"
        />

        <button
          onClick={handleSignup}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-xl hover:scale-105 transition"
        >
          Sign Up
        </button>
      </div>

      {/* 🔹 OVERLAY */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full z-20 flex flex-col justify-center items-center text-white text-center transition-all duration-700 ${
          isSignup
            ? "translate-x-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-r-[100px]"
            : "translate-x-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-l-[100px]"
        }`}
      >
        <div
          className={`absolute flex flex-col items-center transition-all duration-700 ${
            isSignup ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
          <button
            onClick={() => setIsSignup(false)}
            className="border px-6 py-2 rounded-full hover:bg-white hover:text-blue-600"
          >
            Sign In
          </button>
        </div>

        <div
          className={`absolute flex flex-col items-center transition-all duration-700 ${
            !isSignup ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
          <button
            onClick={() => setIsSignup(true)}
            className="border px-6 py-2 rounded-full hover:bg-white hover:text-purple-600"
          >
            Sign Up
          </button>
        </div>
      </div>

    </div>
  );
}