import React, { useEffect, useState } from "react";
import NoteItem from "../../components/NoteItem/NoteItem";
import { BsSearch } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
const Notes = ({ notes, setNotes }) => {
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) => {
        if (
          note.title.toLowerCase().match(text.toLocaleLowerCase()) ||
          note.content.toLowerCase().match(text.toLocaleLowerCase())
        ) {
          return note;
        }
      })
    );
  };

  useEffect(handleSearch, [text]);

  return (
    <div className="bg-gradient-to-r from-slate-900 to-rose-500 h-screen pb-3">
      <header className="p-6 grid grid-cols-5 ">
        <span className="text-5xl text-rose-50 col-start-1">My Notes</span>
        <div className=" flex gap-2 col-start-4">
          <input
            className="py-3 px-2 outline-none rounded-md bg-rose-200 text-rose-50"
            type="text"
            placeholder="Keyword..."
            autoFocus
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
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
        {filteredNotes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            notes={notes}
            onDelete={handleDeleteNote}
          />
        ))}
      </section>
    </div>
  );
};

export default Notes;
