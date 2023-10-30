import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
      <div>
        <h1>
          Welcome to BunnyXpress
        </h1>
        <div>
          <Link to="/home" className="homeLinks">
            Home
          </Link>
          <Link to="/about" className="homeLinks">
            About Me
          </Link>
          <Link to="/portfolio" className="homeLinks">
            Portfolio
          </Link>
          <Link to="/contact" className="homeLinks">
            Contact
          </Link>
        </div>
      </div>
    );
  };
  
  export default Home;