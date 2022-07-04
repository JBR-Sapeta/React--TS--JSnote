import "./home.css";

import mainIgm from "../assets/images/Edito1-L.PNG";
import newCell from "../assets/images/Edito7-M.PNG";
import showOne from "../assets/images/Edito3-M.PNG";
import showTwo from "../assets/images/Edito2-M.PNG";
import showThree from "../assets/images/Edito4-M.PNG";
import rootImage from "../assets/images/Edito1-M.PNG";
import reactImage from "../assets/images/Edito5-M.PNG";

const Home: React.FC = () => {
  return (
    <section className="home-container">
      <h2 className="is-size-1 has-text-centered"> JSnote Editor</h2>
      <div className="box text-container">
        <p className="is-size-5 has-text-centered">
          JSnote is a JavaScript online editor and compiler to write, compile
          and run JavaScript online. Easy to use and perfect for coding and
          creating documentation using markdown. Start writing JavaScript code
          online!
        </p>
      </div>
      <figure className="image is-512x512 home-img mx5">
        <img src={mainIgm} alt="An image of JSnote editor." />
      </figure>

      <div className="box text-container">
        <h3 className="is-size-3 has-text-centered"> How to start ?</h3>
        <p className="is-size-5 has-text-centered">
          You don't know how to start coding? JSnote is easy to use. Below you
          will find all necessary steps.
        </p>
        <div className="content has-text-centered">
          <ul>
            <li>Add new text cell.</li>
            <li>Click text cell to edit it.</li>
            <li>Add code cell and write code.</li>
          </ul>
        </div>
      </div>
      <figure className="image is-512x512  home-img mb5">
        <img src={newCell} alt="Adding new cell in JSnote editor." />
      </figure>

      <div className="box text-container">
        <h3 className="is-size-3 has-text-centered"> Show function</h3>
        <p className="is-size-5 has-text-centered">
          You can show any React component, string, number or anything else by
          calling the <strong className="logo-primry">show</strong> function.
        </p>
      </div>

      <figure className="image is-512x512  home-img mb2">
        <img src={showOne} alt="How to use show function to display jsx." />
      </figure>
      <figure className="image is-512x512  home-img mb2">
        <img src={showTwo} alt="How to use show function to display html." />
      </figure>
      <figure className="image is-512x512  home-img mb5">
        <img
          src={showThree}
          alt="How to use show function to display string and number."
        />
      </figure>

      <div className="box text-container">
        <h3 className="is-size-3 has-text-centered">
          {" "}
          How to use prewiev window ?
        </h3>
        <p className="is-size-5 has-text-centered">
          Select <strong className="logo-primry">#root </strong> element using
          query selesctor and add your content.
        </p>
      </div>
      <figure className="image is-512x512  home-img mb5">
        <img src={rootImage} alt="How to use prewiev window." />
      </figure>

      <div className="box text-container">
        <h3 className="is-size-3 has-text-centered"> How to use React ?</h3>
        <p className="is-size-5 has-text-centered">
          import <span className="logo-primry">React </span> from "react";
        </p>
        <p className="is-size-5 has-text-centered">
          import <span className="logo-primry">ReactDOM </span> from
          "react-dom";
        </p>
        <p className="is-size-5 has-text-centered">
          Now you are redy to create React components !
        </p>
      </div>
      <figure className="image is-512x512  home-img mb5">
        <img
          src={reactImage}
          alt="How to create React components in JSnote editor."
        />
      </figure>

      <article className="message is-warning mb5">
        <div className="message-header">
          <p>Important</p>
        </div>
        <div className="message-body mb5">
          <strong>
            Some features of web browser like for example local storage can not
            work properly.
          </strong>
        </div>
      </article>

      <div className="box text-container mb5">
        <p className="is-size-6 has-text-centered">
        Core functionality of this project was created during &nbsp; 
        <a className="link404" href="https://www.udemy.com/user/sgslo/">
         Stephen Grider  
        </a>
        &nbsp;  React and Typescript course.
        </p>
      </div>
    </section>
  );
};

export default Home;
