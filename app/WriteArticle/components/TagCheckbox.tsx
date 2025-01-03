"use client";

import { ChangeEvent } from "react";

type TagCheckboxProps = {
  placeholder: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function TagCheckbox({
  placeholder,
  label,
  onChange,
  value,
}: TagCheckboxProps) {
  return (
    <div className="flex flex-col w-full space-y-1">
      <label
        id={label}
        className="text-slate-800 text-xl font-medium"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        id={label}
        type="checkbox"
        value={value}
        required
        onChange={onChange}
        placeholder={placeholder}
        className="flex-1 rounded-md px-6 py-2 border"
        style={{ borderColor: "#172B4D", color: "#172B4D" }}
      />
    </div>
  );
}
