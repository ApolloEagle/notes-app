import React, { useState, ChangeEvent } from "react";
import { Check, Pencil, X } from "lucide-react";
import { Button } from ".";
import { useNotesContext } from "../context";

interface CardProps {
  color: string;
  id: string;
}

const Card = ({ color, id }: CardProps) => {
  const [text, setText] = useState<string>("");
  const [noteSaved, setNoteSaved] = useState<boolean>(false);
  const { notes, setNotes } = useNotesContext();

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleUpdateNote = () => {
    setNoteSaved(noteSaved ? false : true);
  };

  const handleDeleteNote = () => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
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
        placeholder="Write something..."
        autoFocus={true}
        onChange={(e) => handleTextChange(e)}
        disabled={noteSaved}
      ></textarea>
      <div className="flex flex-col justify-between items-end h-full">
        <Button
          styles="flex justify-center items-center bg-black rounded-full p-1"
          onClick={() => handleDeleteNote()}
          disabled={false}
        >
          <X color="white" size={16} />
        </Button>
        {text.length > 20 && (
          <Button
            styles="flex justify-center items-center bg-black rounded-full p-2 animate-fade-in"
            onClick={() => handleUpdateNote()}
            disabled={false}
          >
            {noteSaved ? (
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
