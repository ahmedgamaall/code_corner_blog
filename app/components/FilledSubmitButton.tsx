'use client';
import Link from "next/link";
import { ChangeEvent } from "react";

type FilledSubmitButtonProps = {
  title: string;
  onClick?: () => void;
};
export default function FilledSubmitButton({ title, onClick }: FilledSubmitButtonProps) {
  return (
    <button
      className="rounded-lg px-40 py-4 text-white font-medium"
      style={{ backgroundColor: "#172B4D" }}
      onClick={(e) => {}}
    >
      {title}
    </button>
  );
}
