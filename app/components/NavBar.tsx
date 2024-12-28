import CodeCornerLogo from "./CodeCornerLogo";
import FilledButton from "./FilledButton";
import NavBarButton from "./NavBarButton";
import OutlinedButton from "./OutlinedButton";

export default function NavBar() {
  return (
    <nav className="container bg-white ml-2 mr-2">
      <div className="row flex justify-between item-center  p-2">
        <div>
          <CodeCornerLogo />
        </div>
        <div className="hidden md:flex space-x-6 justify-space-between items-center">
          <NavBarButton href="/">Home</NavBarButton>
          <NavBarButton href="/">Categories</NavBarButton>
          <NavBarButton href="/">Profile</NavBarButton>
          <NavBarButton href="/">Search</NavBarButton>
          <NavBarButton href="/">About Me</NavBarButton>
          <NavBarButton href="/">Contact Me</NavBarButton>
        </div>


        <div className="hidden md:flex space-x-2 md:flex-row justify-normal">
          <OutlinedButton title="Sign in"></OutlinedButton>
          <FilledButton title="Sign up"></FilledButton>
        </div>
        <button id="mobile-btn" className="md:hidden">
          {" "}
          menu
        </button>
      </div>
      <div className="md:hidden">
        <div
          id="mobile-menu"
          className="absolute flex hidden flex-col bg-gray-50 py-6 left-6 right-6 items-center space-y-4 font-bold drop-shadow-lg border-gray-300"
        >
          <NavBarButton href="/">Home</NavBarButton>
          <NavBarButton href="/">Categories</NavBarButton>
          <NavBarButton href="/">Profile</NavBarButton>
          <NavBarButton href="/">Search</NavBarButton>
          <NavBarButton href="/">About Me</NavBarButton>
          <NavBarButton href="/">Contact Me</NavBarButton>
          <button className="py-2 px-6 mx-6 rounded-full bg-slate-500 hover:bg-orange-600 text-white">
            Sign in
          </button>
          <button className="py-2 px-6 mx-6 rounded-full bg-slate-500 hover:bg-orange-600 text-white">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}
