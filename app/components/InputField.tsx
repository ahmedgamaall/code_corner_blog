"use client";

import { ChangeEvent } from "react";

type InputFieldProps = {
  placeholder: string;
  onChange: (event: ChangeEvent) => void;
};

export default function InputField({ placeholder, onChange }: InputFieldProps) {
  return (
    <div className="flex flex-col w-full space-y-1">
      <label
        itemID={placeholder}
        className="text-slate-800 text-sm font-medium"
        htmlFor={placeholder}
      >
        {placeholder}
      </label>
      <input
        itemID={placeholder}
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        className="flex-1 rounded-md px-6 py-2 text-slate-800 border border-slate-800"
      />
    </div>
  );
}
