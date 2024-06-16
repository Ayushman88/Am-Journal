import { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons for password visibility

function SignUp() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Access the navigate function from react-router-dom

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to sign up");
      }

      // Clear form data on successful signup
      setFormData({ userName: "", email: "", password: "" });
      setError(""); // Clear any previous error messages

      // Handle success scenario, e.g., redirect to login page
      console.log("User signed up successfully:", data);

      // Navigate to the sign-in page upon successful signup
      navigate("/sign-in");
    } catch (error) {
      setError(error.message || "Failed to sign up");
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
              <Label value="Your Username" />
              <TextInput
                type="text"
                placeholder="Enter your username"
                id="userName"
                value={formData.userName}
                onChange={handleChange}
              />
            </div>
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
            >
              Sign Up
            </Button>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-green-600">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
