"use client";

import { useState } from "react";

export default function SearchInputField() {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [input, setInput] = useState("");
  return (
    <input
      type="text"
      value={input}
      required
      onChange={(event) => setInput(event.target.value)}
      placeholder="search"
      className="w-full rounded-full px-6 py-3 border-none text-slate-800 border focus:border-2 focus:outline-gray-400"
    />
  );
}
