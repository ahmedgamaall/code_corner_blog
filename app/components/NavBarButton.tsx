import Link from "next/link";
import { ReactNode } from "react";

type NavBarButtonProps = {
  href: string;
  children: ReactNode;
};

export default function NavBarButton({ href, children }: NavBarButtonProps) {
  return (
    <Link
      href={href}
      className="text-slate-500 hover:border-b-2 hover:border-slate-800 hover:text-slate-800"
    >
      {children}
    </Link>
  );
}
