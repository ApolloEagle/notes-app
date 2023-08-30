import React from "react";
import { Search as SearchIcon } from "lucide-react";
import { useNotesContext } from "../context";

const Search = () => {
  const { setSearch } = useNotesContext();

  return (
    <div className="flex items-center w-full sm:w-1/2">
      <input
        className="outline-none rounded-full border border-zinc-200 px-4 py-3 w-full focus:border-zinc-300"
        placeholder="Search Notes"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="hidden sm:block fixed right-[56px] text-zinc-500">
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
