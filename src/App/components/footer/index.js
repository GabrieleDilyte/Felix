import "./index.css";

import creditcards from "../../img/credit-cards.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__content--copyright">
          We care about your entertainment. Copyright © 2019–2021 felix.com
        </p>
        <img src={creditcards} alt="Credit cards list"></img>
      </div>
    </footer>
  );
}

export default Footer;
