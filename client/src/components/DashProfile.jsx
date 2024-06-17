import { Button, TextInput } from "flowbite-react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function DashProfile() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-4xl">Profile</h1>
      <form className="flex flex-col gap-5 mt-4">
        <div className="w-32 h-32 self-center cursor-pointer shadow-lg overflow-hidden rounded-full">
          <img
            src={currentUser.profilePicture}
            alt="pfp"
            className="rounded-full w-full h-full object-cover border-8 border-[lightgray]"
          />
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser.username}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
        />
        <div className="relative">
          <TextInput
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="******"
            // value={formData.password}
            // onChange={handleChange}
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <Button
          type="submit"
          className="bg-gradient-to-l from-violet-600 to-rose-600 transition duration-300 ease-in-out hover:bg-gradient-to-l hover:from-violet-500 hover:to-rose-500"
        >
          Update
        </Button>
      </form>
      <div className="text-red-500 flex flex-row justify-between mt-5 place-items-center">
        <span>Delete Account</span>
        <span>Sign Out</span>
      </div>
    </div>
  );
}

export default DashProfile;
