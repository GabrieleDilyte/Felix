import Header from "../header";
import Footer from "../footer";

import "./index.css";

function Layout({ children, user, setUser }) {
  return (
    <div className="App">
      <Header user={user} setuser={setUser} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
