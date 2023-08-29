import React from "react";
import { Card } from ".";
import { useNotesContext } from "../context";
import { Note } from "../types";

const Content = () => {
  const { notes } = useNotesContext();

  return (
    <div className="flex flex-col w-full">
      <h1 className="hidden fixed bg-white top-0 left-32 w-full items-center text-5xl font-semibold mb-12 sm:flex p-10 z-10">
        Notes
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-0 sm:ml-32 mt-0 sm:mt-32 px-10 pb-24 sm:pb-10 pt-10 sm:pt-0 z-0">
        {notes.map((note: Note, idx: number) => (
          <Card key={idx} color={note.color} />
        ))}
      </div>
    </div>
  );
};

export default Content;
