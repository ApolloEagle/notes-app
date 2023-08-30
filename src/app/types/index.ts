import { ReactNode } from "react";

export interface Note {
  id: string;
  color: string;
  body: string;
  saved: boolean;
}

export interface NotesContextProps {
  notes: Note[];
  setNotes: (notes: Note[]) => void;
  search: string;
  setSearch: (search: string) => void;
  saved: boolean;
  setSaved: (saved: boolean) => void;
}

export interface NotesProviderProps {
  children: ReactNode;
}
