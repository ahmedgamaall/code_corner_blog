"use client";

import { useState } from "react";
import SearchResults from "./SearchResults";

export default function AboutBodySection() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [input, setInput] = useState("");

  return (
    <div className="w-full">
      <div
        className="w-full px-40 justify-center items-center py-10 space-y-10"
        style={{ backgroundColor: "#B3CFE1" }}
      >
        <h1
          className="font-black text-3xl text-center"
          style={{ color: "#172B4D" }}
        >
          Search for your favorite article
        </h1>

        <input
          type="text"
          value={input}
          required
          onChange={(event) => setInput(event.target.value)}
          placeholder="search"
          className="w-full rounded-full px-6 py-3 border-none text-slate-800 border focus:border-2 focus:outline-gray-400"
        />
      </div>
      <SearchResults input={input} />
    </div>
  );
}
