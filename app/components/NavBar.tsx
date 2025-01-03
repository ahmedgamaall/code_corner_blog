"use client";

import { logOut, onAuthStateChange } from "@/services/auth";
import CodeCornerLogo from "./CodeCornerLogo";
import FilledButton from "./FilledButton";
import NavBarButton from "./NavBarButton";
import OutlinedButton from "./OutlinedButton";

export default function NavBar() {
  const isUserLoggedIn = onAuthStateChange();
  return (
    <nav className="container bg-white ml-2 mr-2">
      <div className="row flex justify-between item-center  p-2">
        <div>
          <CodeCornerLogo />
        </div>
        <div className="hidden md:flex space-x-6 justify-space-between items-center">
          <NavBarButton href="/">Home</NavBarButton>
          <NavBarButton href="/categories">Categories</NavBarButton>
          <NavBarButton href="/profile">Profile</NavBarButton>
          <NavBarButton href="/search">Search</NavBarButton>
          <NavBarButton href="/aboutme">About Me</NavBarButton>
          <NavBarButton href="/contactme">Contact Me</NavBarButton>
        </div>

        <div className="hidden md:flex space-x-2 md:flex-row justify-normal">
          {isUserLoggedIn ? (
            <OutlinedButton title="Sign in" href="/signin"></OutlinedButton>
          ) : (
            <OutlinedButton
              title="Post Article"
              href="/writearticle"
            ></OutlinedButton>
          )}
          {isUserLoggedIn ? (
            <FilledButton title="Sign up" href="/signup"></FilledButton>
          ) : (
            <FilledButton
              title="Sign out"
              onClick={() => {
                logOut();
              }}
            ></FilledButton>
          )}
        </div>
        <button id="mobile-btn" className="md:hidden">
          menu
        </button>
      </div>
      <div className="md:hidden">
        <div
          id="mobile-menu"
          className="absolute flex hidden flex-col bg-gray-50 py-6 left-6 right-6 items-center space-y-4 font-bold drop-shadow-lg border-gray-300"
        >
          <NavBarButton href="/">Home</NavBarButton>
          <NavBarButton href="/categories">Categories</NavBarButton>
          <NavBarButton href="/profile">Profile</NavBarButton>
          <NavBarButton href="/search">Search</NavBarButton>
          <NavBarButton href="/aboutme">About Me</NavBarButton>
          <NavBarButton href="/contactme">Contact Me</NavBarButton>
          {isUserLoggedIn ? (
            <OutlinedButton title="Sign in" href="/signin"></OutlinedButton>
          ) : (
            <OutlinedButton
              title="Post Article"
              href="/writearticle"
            ></OutlinedButton>
          )}
          {isUserLoggedIn ? (
            <FilledButton title="Sign up" href="/signup"></FilledButton>
          ) : (
            <FilledButton
              title="Sign out"
              onClick={() => {
                logOut();
              }}
            ></FilledButton>
          )}
        </div>
      </div>
    </nav>
  );
}
