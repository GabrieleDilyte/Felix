import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./pages/home";
import Login from "./pages/login";
import SingleMovie from "./pages/single_movie";
import Layout from "./components/layout";
import store from "../store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/content/:movieId" element={<SingleMovie />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
