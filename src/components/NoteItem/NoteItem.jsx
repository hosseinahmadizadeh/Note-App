import React from "react";
import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  return (
    <Link
      to={`/edit-note/${note.id}`}
      className="pt-1 pl-2 pb-10 bg-rose-200 flex flex-col items-start rounded-md"
    >
      <h1>
        {note.title.length > 7 ? note.title.substr(0, 7) + "..." : note.title}
      </h1>
      <p>{note.content}</p>
      <p>{note.date}</p>
    </Link>
  );
};

export default NoteItem;
