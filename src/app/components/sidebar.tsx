"use client";
import React, { useState } from "react";
import { Button } from ".";
import { Plus } from "lucide-react";

const SideBar = () => {
  const colorPalette: string[] = [
    "bg-orange-300",
    "bg-red-300",
    "bg-purple-300",
    "bg-blue-300",
    "bg-green-300",
  ];

  const [displayNoteColors, setDisplayNoteColors] = useState<boolean>(false);

  return (
    <div className="flex flex-row sm:flex-col justify-center sm:justify-start items-center w-screen sm:h-screen fixed bottom-0 h-16 sm:w-32 border-t sm:border-r border-r-zinc-200 p-6">
      <h2 className="mb-0 sm:mb-10 hidden sm:block">Notes</h2>
      <Button
        styles={`flex justify-center items-center bg-black rounded-full p-2 mb-0 sm:mb-12 ${
          !displayNoteColors ? "active:p-3" : "active:none hidden sm:block"
        } duration-300`}
        onClick={() => setDisplayNoteColors(true)}
        disabled={displayNoteColors}
      >
        <Plus color="white" />
      </Button>
      {displayNoteColors && (
        <div className="flex flex-row sm:flex-col">
          {colorPalette.map((color: string, idx: number) => (
            <Button
              key={idx}
              styles={`${color} p-2 rounded-full m-2 ${
                displayNoteColors ? "animate-fade-in" : "animate-fade-out"
              }`}
              onClick={() => console.log("BOOM")}
              disabled={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SideBar;
