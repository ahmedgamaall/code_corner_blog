"use client";

import { ChangeEvent } from "react";

type BorderedInputFieldProps = {
  placeholder: string;
  label: string;
  value: string;
  type: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function BorderedInputField({
  placeholder,
  label,
  name,
  onChange,
  type,
  value,
}: BorderedInputFieldProps) {
  return (
    <div className="flex flex-col w-full space-y-1">
      <label
        itemID={label}
        className="text-slate-800 text-xl font-medium"
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
        name={name}
        placeholder={placeholder}
        className="flex-1 rounded-md px-6 py-2 border"
        style={{ borderColor: "#172B4D", color: "#172B4D" }}
      />
    </div>
  );
}
