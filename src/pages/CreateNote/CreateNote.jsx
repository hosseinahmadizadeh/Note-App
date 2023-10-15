import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import UseCreateDate from "../../components/UseCreateDate";

const CreateNote = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const date = UseCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      const note = { id: uuid(), title, content, date };
      setNotes((prevNote) => [note, ...prevNote]);
      navigate("/");
    }
  };

  return (
    <section className="bg-gradient-to-r from-slate-900 to-rose-500 h-screen">
      <header className=" p-6 grid grid-cols-5 items-center">
        <Link to={"/"} className="bg-rose-50 p-2  col-end-1 rounded-md">
          <BiArrowBack size={30} className="fill-rose-700" />
        </Link>
        <h2 className="text-5xl col-start-1 col-end-3 pl-4 text-rose-50">
          Create Note
        </h2>
        <button
          className="bg-rose-900 px-4 py-1 col-start-6 text-4xl rounded-md text-rose-50"
          onClick={handleSubmit}
        >
          Save
        </button>
      </header>
      <form
        className="flex flex-col gap-2 items-center"
        onSubmit={handleSubmit}
        action=""
      >
        <input
          type="text"
          placeholder="Title:"
          className="p-4 w-4/5 rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="20"
          placeholder="Content..."
          className="resize-none p-4 w-4/5 rounded-lg"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
