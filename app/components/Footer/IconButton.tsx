import Link from "next/link";

type IconButtonProps = {
    href: string;
    icon: string;
    text: string;
}

export default function IconButton({href, icon, text}: IconButtonProps) {
  return (
    <Link
      href={href}
      className="flex flex-row items-center space-x-2 hover:text-orange-500"
    >
      <div className="text-2xl font-light">
        <i className={icon}></i>
      </div>
      <div className="font-light">{text}</div>
    </Link>
  );
}


        //   <div className="flex flex-row justify-between space-x-4">
        //     <Link href="#">
        //       <i className="ri-facebook-box-fill"></i>
        //     </Link>
        //     <Link href="#">
        //       <i className="ri-instagram-line"></i>
        //     </Link>{" "}
        //     <Link href="#">
        //       <i className="ri-linkedin-box-fill"></i>
        //     </Link>{" "}
        //     <Link href="#">
        //       <i className="ri-twitter-x-line"></i>
        //     </Link>
        //   </div>;