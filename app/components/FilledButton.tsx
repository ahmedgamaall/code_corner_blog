'use client';
import { ChangeEvent } from "react";

type FilledButtonProps = {
  title: string;
  onClick?: () => void;
};
export default function FilledButton({ title, onClick }: FilledButtonProps) {
  return (
    <button
      className="rounded-lg px-10 py-2 text-white font-medium"
      style={{ backgroundColor: "#172B4D" }}
      // onClick={onClick()}
    >
      {title}
    </button>
  );
}
