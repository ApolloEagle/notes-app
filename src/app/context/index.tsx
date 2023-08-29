import { createContext, useContext, useState } from "react";
import { NotesContextProps, NotesProviderProps, Note } from "../types";

const NotesContext = createContext<NotesContextProps>({
  notes: [],
  setNotes: () => undefined,
});

const useNotesContext = () => useContext(NotesContext);

const NotesProvider = ({ children }: NotesProviderProps) => {
  const [notes, setNotes] = useState<Note[]>([]);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export { useNotesContext, NotesProvider };
