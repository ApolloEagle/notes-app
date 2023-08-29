import { ReactNode } from "react";

export interface Note {
  id: string;
  color: string;
}

export interface NotesContextProps {
  notes: Note[];
  setNotes: (notes: Note[]) => void;
}

export interface NotesProviderProps {
  children: ReactNode;
}
