import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams, useNavigate } from "react-router-dom";
import UseCreateDate from "../../components/UseCreateDate";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const date = UseCreateDate();
  const navigate = useNavigate();
  const handleForm = () => {
    if (title && content) {
      const newNote = { ...note, title, content, date };
      const newNotes = notes.map((item) => {
        if (item.id === id) {
          item = newNote;
        }
        return item;
      });
      setNotes(newNotes);
    }
    navigate("/");
  };
  return (
    <section className="bg-gradient-to-r from-slate-900 to-rose-500 h-screen">
      <header className=" p-6 grid grid-cols-5 items-center">
        <Link
          to={"/"}
          className="bg-rose-100 p-2  col-end-1 rounded-md hover:scale-105"
        >
          <BiArrowBack size={30} className="fill-rose-950" />
        </Link>
        <h2 className="text-5xl col-start-1 col-end-3 pl-4 text-rose-50">
          Edit Note
        </h2>
        <button
          className="bg-rose-100 px-4 py-1 col-start-6 text-4xl rounded-md text-rose-950 hover:scale-105"
          onClick={handleForm}
        >
          Save
        </button>
      </header>
      <form
        className="flex flex-col gap-2 items-center "
        action=""
        onSubmit={handleForm}
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

export default EditNote;
