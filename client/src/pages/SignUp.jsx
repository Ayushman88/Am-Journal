import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row gap-10">
        <div className="left flex-1 mt-10">
          <Link to="/" className="text-4xl font-bold  dark:text-white ">
            <span className="bg-gradient-to-r from-violet-600 to-rose-600 bg-clip-text text-transparent">
              AM{" "}
            </span>
            Journal
          </Link>
          <p className="text-sm mt-5 w-96">
            Welcome to my journal, where I document my coding journey and work
            experiences.This space serves as a personal reference and a glimpse
            into my growth as a developer.
          </p>
        </div>
        <div className="right flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your Username" />
              <TextInput
                type="text"
                placeholder="Enter your username"
                id="username"
              />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="text"
                placeholder="name@example.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput type="text" id="password" />
            </div>
            <Button
              className="bg-gradient-to-l from-violet-600 to-rose-600 transition duration-300 ease-in-out hover:bg-gradient-to-l hover:from-violet-500 hover:to-rose-500"
              type="submit"
            >
              Sign Up
            </Button>
          </form>
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
