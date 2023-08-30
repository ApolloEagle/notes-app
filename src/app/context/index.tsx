import { createContext, useContext, useState } from "react";
import { NotesContextProps, NotesProviderProps, Note } from "../types";

const NotesContext = createContext<NotesContextProps>({
  notes: [],
  setNotes: () => undefined,
  search: "",
  setSearch: () => undefined,
  saved: false,
  setSaved: () => undefined,
});

const useNotesContext = () => useContext(NotesContext);

const NotesProvider = ({ children }: NotesProviderProps) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [search, setSearch] = useState<string>("");
  const [saved, setSaved] = useState<boolean>(false);

  return (
    <NotesContext.Provider
      value={{
        notes,
        setNotes,
        search,
        setSearch,
        saved,
        setSaved,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export { useNotesContext, NotesProvider };
