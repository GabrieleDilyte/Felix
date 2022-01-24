import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Provider } from "react-redux";

import Home from "./pages/home";
import Login from "./pages/login";
import Content from "./pages/content";
import SingleMovie from "./pages/single_movie";
import Layout from "./components/layout";
import store from "../store";

function App() {
  //const [favorite, toggleFavorite] = useState([]);
  const [user, setUser] = useState("");

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout user={user} setUser={setUser}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={<Login user={user} setUser={setUser} />}
            />
            <Route
              path="/content"
              element={<Content user={user} setUser={setUser} />}
            />
            <Route path="/content/:movieId" element={<SingleMovie />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
