"use client";
import { useState, type FormEvent, useEffect, useRef } from "react";
import Hero from "./hero";
import { useRouter, useSearchParams } from "next/navigation";

export default function HeroWithSearch() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * Sets the search query from the url onload.
   */
  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      setSearchQuery(query);
    } else {
      router.replace("/");
    }
  }, []);

  /**
   * Handles the input change.
   * @param e FormEvent
   */
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value);
  };

  /**
   * Handles the form submission.
   * @param e FormEvent
   */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      !searchQuery.trim() ||
      searchQuery === searchParams.get("q") ||
      searchQuery === ""
    ) {
      inputRef.current?.focus();
    } else {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col p-2 md:p-0">
      <Hero />
      <form
        onSubmit={handleSubmit}
        className="relative mx-auto flex w-[90%] -translate-y-1/2 flex-col sm:w-[80%] md:w-[50%] md:flex-row"
      >
        <input
          ref={inputRef}
          value={searchQuery}
          onChange={handleChange}
          type="text"
          placeholder="What job are you looking for?"
          className="w-full rounded-bl-none rounded-tl-xl rounded-tr-xl bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 text-[1em] text-xl font-bold shadow-lg focus:outline-slate-200 md:rounded-bl-xl md:rounded-br-none md:rounded-tl-xl md:rounded-tr-none md:text-2xl"
        />
        <button
          type="submit"
          className="md:text-md rounded-bl-xl rounded-br-xl bg-gradient-to-l from-slate-700 to-slate-800 px-4 py-2 text-lg font-bold text-white duration-300 ease-in-out hover:bg-pink-700 md:rounded-bl-none md:rounded-br-xl md:rounded-tr-xl"
        >
          Search
        </button>
      </form>
    </div>
  );
}
