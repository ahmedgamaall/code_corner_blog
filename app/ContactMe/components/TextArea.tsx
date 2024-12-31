"use client";

import { ChangeEvent } from "react";

type TextAreaProps = {
  placeholder: string;
  label: string;
  value: string;
  type: string;
  lines: number;
  name: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function TextArea({
  placeholder,
  label,
  name,
  onChange,
  type,
  lines=8,
  value,
}: TextAreaProps) {
  return (
    <div className="flex flex-col w-full space-y-1">
      <label
        itemID={label}
        className="text-slate-800 text-xl font-medium"
        htmlFor={label}
      >
        {label}
      </label>
      <textarea
        itemID={label}
        value={value}
        required
        onChange={onChange}
        rows={lines}
        name={name}
        placeholder={placeholder}
        className="flex-1 rounded-md px-6 py-2 border"
        style={{ borderColor: "#172B4D", color: "#172B4D" }}
      />
    </div>
  );
}
