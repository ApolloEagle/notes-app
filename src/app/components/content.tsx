import React from "react";
import { Card, Search } from ".";
import { useNotesContext } from "../context";
import { Note } from "../types";

const Content = () => {
  const { notes, search } = useNotesContext();

  // Filter notes by text in body.
  const filteredNotes = notes.filter((note) =>
    note.body.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full">
      <div className="hidden fixed bg-white top-0 left-32 w-[calc(100%-128px)] items-center justify-between mb-12 sm:flex p-10 z-10">
        <h1 className="top-0 left-32 items-center text-5xl font-semibold">
          Notes
        </h1>
        <Search />
      </div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-0 sm:ml-32 mt-0 sm:mt-32 px-10 pb-24 sm:pb-10 pt-10 sm:pt-0 z-0">
        {filteredNotes.map(({ ...props }: Note, idx: number) => (
          <li key={idx}>
            <Card {...props} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
