import Notes from "./pages/Notes/Notes";
import CreateNote from "./pages/CreateNote/CreateNote";
import EditNote from "./pages/EditNote/EditNote";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <main id="app" className="bg-gradient-to-r from-slate-900 to-rose-500">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create-note" element={<CreateNote />} />
          <Route path="/edit-note/:id" element={<EditNote />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
