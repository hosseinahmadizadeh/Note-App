import React from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";

const NoteItem = ({ note }) => {
  return (
    <section className=" bg-rose-200 flex items-start rounded-md gap-1 justify-between">
      <Link to={`/edit-note/${note.id}`}>
        <div className="w-80 pt-2 pl-2 pb-10 flex flex-col">
          <h1 className="text-2xl">
            {note.title.length > 20
              ? note.title.substr(0, 20) + "..."
              : note.title}
          </h1>
          <p className="box-content">
            {note.content.length > 100
              ? note.content.substr(0, 100) + "..."
              : note.content}
          </p>
        </div>
      </Link>
      <button className="p-1">
        <RiDeleteBin6Fill
          size={25}
          className="fill-rose-500 hover:fill-rose-800"
        />
      </button>
    </section>
  );
};

export default NoteItem;
