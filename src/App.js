import Notes from "./pages/Notes/Notes";
import CreateNote from "./pages/CreateNote/CreateNote";
import EditNote from "./pages/EditNote/EditNote";
import dummyNotes from "./dummy-notes";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />} />
          <Route
            path="/create-note"
            element={<CreateNote setNotes={setNotes} />}
          />
          <Route path="/edit-note/:id" element={<EditNote />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
