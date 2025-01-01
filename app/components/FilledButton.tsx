'use client';
import Link from "next/link";
import { ChangeEvent } from "react";

type FilledButtonProps = {
  title: string;
  href?: string;
  onClick?: () => void;
};
export default function FilledButton({ title, onClick, href }: FilledButtonProps) {
  return (
    <Link
      href={href ?? ""}
      className="rounded-lg px-10 py-2 text-white font-medium"
      style={{ backgroundColor: "#172B4D" }}
      // onClick={onClick()}
    >
      {title}
    </Link>
  );
}
