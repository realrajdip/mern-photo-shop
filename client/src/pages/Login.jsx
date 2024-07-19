import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(import.meta.env.VITE_API_URL + "/login", {
        email,
        password,
      });

      const data = await res.data;
      if(data.success) {
        setEmail('');
        setPassword('')
        toast.success(data.message);

        navigate('/')
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
  return (
    <div className="mt-20 sm:mt-10 min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-none sm:rounded-3xl px-5 py-6 sm:w-[27rem] w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Let's Connect!</h1>
        <form onSubmit={handleLogin}>
          {/* For email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="someone@email.com"
              className="shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* For password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* For forgot password */}
          <a href="#" className="text-xs text-gray-600 hover:text-black">
            Forgot Password?
          </a>

          {/* Signup with account */}
          <div className="flex items-center justify-end mb-4">
            <Link className="text-xs text-black " to="/signup">
              Create Account
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md shadow-md text-sm font-medium text-white bg-black "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
