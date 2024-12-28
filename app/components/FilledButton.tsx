'use client';
import { ChangeEvent } from "react";

type FilledButtonProps = {
  title: string;
  onClick?: () => void;
};
export default function FilledButton({ title, onClick }: FilledButtonProps) {
  return (
    <button
      className="bg-slate-800 rounded-lg px-10 py-2 text-white font-medium"
      // onClick={onClick()}
    >
      {title}
    </button>
  );
}
