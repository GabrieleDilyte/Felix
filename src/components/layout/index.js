import Header from "../header";
import Footer from "../footer";

import "../../App.css";

function Layout({ children, user }) {
  return (
    <div className="App">
      <Header user={user} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
