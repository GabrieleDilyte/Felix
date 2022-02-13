import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import SingleMovie from "./pages/single_movie";
import Layout from "./components/layout";
import { ContentProvider, AuthProvider } from "./context";

function App() {
  return (
    <AuthProvider>
      <ContentProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/content/:movieId" element={<SingleMovie />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ContentProvider>
    </AuthProvider>
  );
}

export default App;
