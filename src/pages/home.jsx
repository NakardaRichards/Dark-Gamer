import React from "react";
import "./index.css";
import "../css/home.css";
export const Home = () => {
  return (
    <React.Fragment>
      <div className="homeContainer">
        <img
          style={{ width: "100%" }}
          src="https://images.unsplash.com/photo-1499551660540-eaf0697882f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
          alt="pic"
        ></img>
        <p
          className="centered"
          style={{ fontSize: "50px", fontFamily: "Alternate Gothic", color:"#fff" }}
        >
          Welcome To Dark Gamer
        </p>
      </div>
    </React.Fragment>
  );
};

export default Home;
