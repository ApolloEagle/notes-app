"use client";
import { Content, SideBar } from "./components";
import { NotesProvider } from "./context";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <NotesProvider>
        <SideBar />
        <Content />
      </NotesProvider>
    </main>
  );
}
