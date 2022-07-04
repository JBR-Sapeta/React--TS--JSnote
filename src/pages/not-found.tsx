import { Link } from "react-router-dom";
import "./not-found.css";

const NotFound = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="box has-text-centered">
          <h2 className="title is-size-1">404 </h2>
          <p className="subtitle"> Page not found</p>
          <Link to="/home" >
            Go back to<span className="link404"> home page</span> !
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
