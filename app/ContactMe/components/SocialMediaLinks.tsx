import Link from "next/link";

export default function SocialMediaLinks() {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 mb-20">
      <div style={{ color: "#172B4D" }}>or reach me on social media</div>
      <div className="flex flex-row justify-center space-x-4">
        <Link
          href="https://www.facebook.com/profile.php?id=61571503941327&mibextid=ZbWKwL"
          className="text-4xl text-slate-800 hover:text-orange-500"
        >
          <i className="ri-facebook-box-fill"></i>
        </Link>
        <Link
          href="https://www.instagram.com/code.corner.blog/profilecard/?igsh=MXdweWpydWd1amNiOA=="
          className="text-4xl text-slate-800 hover:text-orange-500"
        >
          <i className="ri-instagram-line"></i>
        </Link>
        <Link
          href="https://twitter.com/GamalGa66055643?t=0zYxc3rEbbINqqUh-X1DsA&s=09"
          className="text-4xl text-slate-800 hover:text-orange-500"
        >
          <i className="ri-twitter-x-line"></i>
        </Link>
        <Link
          href="https://www.linkedin.com/in/ahmed-gamal-aa076b220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="text-4xl text-slate-800 hover:text-orange-500"
        >
          <i className="ri-linkedin-box-fill"></i>
        </Link>
        <Link
          href="https://youtube.com/@ahmedgammal4022?si=w_RXisdXZGZXuaYg"
          className="text-4xl text-slate-800 hover:text-orange-500"
        >
          <i className="ri-youtube-fill"></i>{" "}
        </Link>
      </div>
    </div>
  );
}
