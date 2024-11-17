import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Cadastro from "./components/cadastro";
import Profile from "./components/profile";

function App() {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <div>
        {!token ? (
          <Routes>
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        ) : (
          <Profile token={token} />
        )}
      </div>
    </Router>
  );
}

export default App;
