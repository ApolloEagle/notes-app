import React, { useEffect, useState } from "react";
import { Check, Pencil, X } from "lucide-react";
import { Button } from ".";
import { useNotesContext } from "../context";
import { Note } from "../types";

const Card = ({ id, body, color, saved }: Note) => {
  const { notes, setNotes } = useNotesContext();
  const [noteText, setNoteText] = useState<string>("");

  // Clear noteText when new note is created.
  useEffect(() => {
    setNoteText(body);
  }, [body]);

  const handleUpdateNote = () => {
    if (noteText.trim() === "") return;
    const updatedNotes = notes.map((note: Note) =>
      note.id === id ? { ...note, body: noteText, saved: !saved } : note
    );
    setNotes(updatedNotes);
  };

  const handleDeleteNote = () => {
    const updatedNotes = notes.filter((note: Note) => note.id !== id);
    setNotes(updatedNotes);
  };

  // Checking note text/body to conditionally render edit/save buttons.
  const checkNoteText = () => {
    return body.length > 20 ? true : noteText.length > 20 ? true : false;
  };

  return (
    <div
      className={`${color} flex w-full aspect-square justify-between items-center rounded-2xl animate-fade-in p-4`}
    >
      <textarea
        className={`outline-none border-none resize-none ${color} placeholder-zinc-100 h-full w-full`}
        name="story"
        minLength={20}
        maxLength={300}
        placeholder="What's on your mind?"
        autoFocus={true}
        onChange={(e) => setNoteText(e.target.value)}
        value={noteText}
        disabled={saved}
      />
      <div className="flex flex-col justify-between items-end h-full">
        <Button
          styles="flex justify-center items-center bg-black rounded-full p-1"
          onClick={() => handleDeleteNote()}
          disabled={false}
        >
          <X color="white" size={16} />
        </Button>
        {checkNoteText() && (
          <Button
            styles="flex justify-center items-center bg-black rounded-full p-2 animate-fade-in"
            onClick={() => handleUpdateNote()}
            disabled={false}
          >
            {saved ? (
              <Pencil color="white" size={20} />
            ) : (
              <Check color="white" size={20} />
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Card;
