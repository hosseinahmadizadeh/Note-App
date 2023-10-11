import React from "react";
import dummyNotes from "../../dummy-notes";
import NoteItem from "../../components/NoteItem/NoteItem";

import { BsSearch } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
const Notes = () => {
  return (
    <div>
      <header className="p-6 grid grid-cols-5 ">
        <span className="text-5xl text-rose-50 col-start-1">My Notes</span>
        <div className=" flex gap-2 col-start-4">
          <input
            className="py-3 px-2 outline-none rounded-md bg-rose-200 text-rose-50"
            type="text"
            placeholder="Keyword..."
            autoFocus
          />
          <button className="bg-rose-400 rounded-md p-3">
            <BsSearch size={25} color="white" />
          </button>
        </div>
        <Link
          to="/create-note"
          className=" flex items-center justify-end col-start-5"
        >
          <BsPlusLg
            size={50}
            color="white"
            className=" bg-rose-800 rounded-md"
          />
        </Link>
      </header>
      <section className="grid grid-cols-3 gap-4 m-3">
        {dummyNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </section>
    </div>
  );
};

export default Notes;