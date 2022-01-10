import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/home";
import Login from "./pages/login";
import Content from "./pages/content";

import Layout from "./components/layout";

function App() {
  const [favorite, toggleFavorite] = useState([]);
  const [user, setUser] = useState();

  return (
    <BrowserRouter>
      <Layout user={user}>
        <Routes>
          <Route
            path="/"
            element={
              <Home favorite={favorite} toggleFavorite={toggleFavorite} />
            }
          />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route
            path="/content"
            element={
              <Content favorite={favorite} toggleFavorite={toggleFavorite} />
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
