import { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
// import OAuth from "../components/OAuth";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Access the navigate function from react-router-dom

  // Redux state selectors
  const { loading, errorMessage } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to sign in");
      }

      setFormData({ email: "", password: "" });

      dispatch(signInSuccess(data));

      navigate("/");
    } catch (error) {
      // Dispatch failure action with error message
      dispatch(signInFailure(error.message || "Failed to sign in"));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row gap-10">
        <div className="left flex-1 mt-10">
          <Link to="/" className="text-4xl font-bold dark:text-white">
            <span className="bg-gradient-to-r from-violet-600 to-rose-600 bg-clip-text text-transparent">
              AM{" "}
            </span>
            Journal
          </Link>
          <p className="text-sm mt-5 w-96">
            Welcome to my journal, where I document my coding journey and work
            experiences. This space serves as a personal reference and a glimpse
            into my growth as a developer.
          </p>
        </div>
        <div className="right flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="name@example.com"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Password" />
              <div className="relative">
                <TextInput
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <Button
              className="bg-gradient-to-l from-violet-600 to-rose-600 transition duration-300 ease-in-out hover:bg-gradient-to-l hover:from-violet-500 hover:to-rose-500"
              type="submit"
              disabled={loading} // Disable button while loading
            >
              {loading ? "Loading..." : "Sign In"}
            </Button>
            {/* <OAuth /> */}
            <h4>Google Auth not available due to domain issue</h4>
          </form>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
          <div className="flex gap-2 text-sm mt-5">
            <span>Don&apos;t have an account?</span>
            <Link to="/sign-up" className="text-green-600">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
