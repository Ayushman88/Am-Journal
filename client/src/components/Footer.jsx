import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsInstagram, BsGithub } from "react-icons/bs";
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-violet-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link to="/" className="text-4xl font-bold dark:text-white">
              <span className="bg-gradient-to-r from-violet-600 to-rose-600 bg-clip-text text-transparent">
                AM{" "}
              </span>
              Journal
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.instagram.com/am.ascript/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tech Reels
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AM Journal
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.github.com/Ayushman88"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="https://www.instagram.com/am.ascript/">
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Ayushman Mishra"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.instagram.com/am.ascript/"
              icon={BsInstagram}
            />
            <Footer.Icon href="https://github.com/Ayushman88" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
