"use client";

import { ChangeEvent } from "react";

type InputFieldProps = {
  placeholder: string;
  label: string;
  value: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function InputField({
  placeholder,
  label,
  onChange,
  type,
  value,
}: InputFieldProps) {
  return (
    <div className="flex flex-col w-full space-y-1">
      <label
        itemID={label}
        className="text-slate-800 text-sm font-medium"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        itemID={label}
        type={type}
        value={value}
        required
        onChange={onChange}
        placeholder={placeholder}
        className="flex-1 rounded-md px-6 py-2 border-none text-slate-800 border focus:border-2 focus:outline-gray-400"
      />
    </div>
  );
}
