"use client";

import { search } from "@/services/db";
import { useState } from "react";
import SearchResults from "./SearchResults";

export default function AboutBodySection() {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [input, setInput] = useState("");

  const onSubmit = async () => {
    setLoading(true);

    try {
      const articlesFromDb: any = await search(input);
      console.log(articlesFromDb);
      setArticles(articlesFromDb);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
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

        <form
          className="items-center flex flex-col space-y-6 w-full justify-stretch"
          onSubmit={(event) => {
            console.log("onSubmit");
            event.preventDefault();
            onSubmit();
          }}
        >
          <input
            type="text"
            value={input}
            required
            onChange={(event) => setInput(event.target.value)}
            placeholder="search"
            className="w-full rounded-full px-6 py-3 border-none text-slate-800 border focus:border-2 focus:outline-gray-400"
          />
        </form>
      </div>
      {loading ? (
        <div
          className="container m-20 flex h-20 w-20 items-center delay-1000 duration-1000 ease-linear p-2 text-center justify-center animate-bounce"
          style={{ background: "#103851" }}
        ></div>
      ) : articles ? (
        <SearchResults articles={articles} />
      ) : (
        <div>
          <h2 className="mb-8 font-bold text-3xl">No result 😥</h2>
          <p className="text-lg mb-20">
            We couldn’t find any posts with the keyword `ke`. Please try another
            keyword.
          </p>
        </div>
      )}
    </div>
  );
}
