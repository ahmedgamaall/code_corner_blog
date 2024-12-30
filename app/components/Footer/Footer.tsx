import Link from "next/link";
import LinkButton from "./LinkButton";
import IconButton from "./IconButton";

export default function Footer() {
  return (
    <footer className="bg-slate-900 flex w-full flex-col px-5 py-10">
      <div className="container flex flex-col  md:flex-row text-white justify-around space-x-8 md:space-y-0">
        <div className="flex flex-col items-center justify-between space-y-8 md:space-y-8 md:items-start">
          <div className="flex flex-col justify-evenly items-start space-y-4">
            <div className="flex flex-row space-x-2 justify-center items-center">
              <img
                src="/code_corner_white_logo.svg"
                alt="Code Corner Logo"
                className="h-12 w-12"
              />
              <h5 className="text-xl">Code Corner</h5>
            </div>
            <div>Where dreams turn into codes</div>
            <div>
              Join our newsletter to stay up to date on features and releases.
            </div>
            <div className="text-xs">
              By Registering you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </div>
          </div>
        </div>

        <div className="flex justify-between flex-col">
          <div className="font-bold mb-2">About Blog</div>
          <Link href="/" className="hover:text-orange-500 font-light">
            Home
          </Link>
          <Link href="/categories" className="hover:text-orange-500 font-light">
            Categories
          </Link>
          <Link href="/profile" className="hover:text-orange-500 font-light">
            Profile
          </Link>
          <Link href="/aboutme" className="hover:text-orange-500 font-light">
            About Me
          </Link>
          <Link href="/contactme" className="hover:text-orange-500 font-light">
            Contact Me
          </Link>
          <Link href="/search" className="hover:text-orange-500 font-light">
            Search
          </Link>
        </div>
        <div className="flex justify-between flex-col">
          <div className="font-bold mb-4">Follow Me</div>
          <IconButton
            href="https://www.facebook.com/profile.php?id=61571503941327&mibextid=ZbWKwL"
            text="Facebook"
            icon="ri-facebook-box-fill"
          />
          <IconButton
            href="https://www.instagram.com/code.corner.blog/profilecard/?igsh=MXdweWpydWd1amNiOA=="
            text="Instagram"
            icon="ri-instagram-line"
          />
          <IconButton
            href="https://twitter.com/GamalGa66055643?t=0zYxc3rEbbINqqUh-X1DsA&s=09"
            text="X"
            icon="ri-twitter-x-line"
          />
          <IconButton
            href="https://www.linkedin.com/in/ahmed-gamal-aa076b220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            text="Linked in"
            icon="ri-linkedin-box-fill"
          />
          <IconButton
            href="https://github.com/ahmedgamaall"
            text="Github"
            icon="ri-github-fill"
          />
        </div>
      </div>
      <hr className="mt-16 mb-4" />
      <div className="flex flex-row items-center justify-between">
        <div className="text-xs">
          Copyright &copy; 2024 code corner. All Rights Reserved.
        </div>
        <div className="text-xs">
          2024 Designed and Developed By Ahmed Gamal
        </div>
        <div className="flex flex-row space-x-4">
          <LinkButton href="#" text="Privacy Policy" />
          <LinkButton href="#" text="Terms of Service" />
          <LinkButton href="#" text="Cookies Settings" />
        </div>
      </div>
    </footer>
  );
}
