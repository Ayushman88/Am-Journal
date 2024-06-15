import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-md sm:text-xl font-semibold  dark:text-white"
      >
        <span className="bg-gradient-to-r from-violet-600 to-rose-600 bg-clip-text text-transparent">
          AM{" "}
        </span>
        Journal
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={IoSearchOutline}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <IoSearchOutline />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray">
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button className="bg-gradient-to-t from-violet-600 to-rose-600" pill>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/project"} as={"div"}>
          <Link to="/project">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
