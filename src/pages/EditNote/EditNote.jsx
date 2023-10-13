import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
const EditNote = () => {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-rose-500 h-screen">
      <header className=" p-6 grid grid-cols-5 items-center">
        <Link to={"/"} className="bg-rose-50 p-2  col-end-1 rounded-md">
          <BiArrowBack size={30} className="fill-rose-700 " />
        </Link>
        <h2 className="text-5xl col-start-1 col-end-3 pl-4 text-rose-50">
          Edit Note
        </h2>
        <button className="bg-rose-200 hover:bg-rose-900 text-rose-900 hover:text-rose-900 px-4 py-1 col-start-6 text-4xl rounded-md ">
          Save
        </button>
      </header>
      <form className="flex flex-col gap-2 items-center " action="">
        <input
          type="text"
          placeholder="Title:"
          className="p-4 w-4/5 rounded-lg"
        />
        <textarea
          rows="20"
          placeholder="Content..."
          className="resize-none p-4 w-4/5 rounded-lg"
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;
