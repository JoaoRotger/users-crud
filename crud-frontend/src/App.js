import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Create from './pages/create';
import Read from './pages/read';
import Delete from "./pages/delete";
import Update from "./pages/update";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="read" element={<Read />} />
          <Route path="delete" element={<Delete />} />
          <Route path="update" element={<Update />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
