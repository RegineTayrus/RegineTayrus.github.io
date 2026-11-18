import { Link } from "react-router-dom";
import portrait from "../../images/regine.png";

export default function HomePage() {
  return (
    <main>
      <section className="home">
        <div className="left">
          <h2>Hello, I&apos;m</h2>
          <h1>Regine Tayrus</h1>
          <h3>Web Designer</h3>
          <p>
            I design and build beautiful, responsive websites that provide
            great user experience and help brands grow.
          </p>
          <Link to="/work" className="btn">
            VIEW MY WORK <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
        <div className="right">
          <img src={portrait} alt="Regine Tayrus" />
        </div>
      </section>
    </main>
  );
}
