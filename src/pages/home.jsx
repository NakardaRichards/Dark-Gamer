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
          style={{
            fontSize: "50px",
            fontFamily: "Alternate Gothic",
            color: "#fff",
          }}
        >
          Welcome To Dark Gamer
        </p>
        <h1 className="centered2" style={{ textAlign: "center" }}>
          Games Modding Soon...
        </h1>
      </div>

      <div className="homeContainer">
        <div id="demo" class="carousel slide" data-ride="carousel">
          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
            <li data-target="#demo" data-slide-to="3"></li>
          </ul>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://images.alphacoders.com/271/thumb-1920-271941.jpg"
                alt="Prototype 2"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://images5.alphacoders.com/693/thumb-1920-693371.jpg"
                alt="Mafia III"
                w
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://images7.alphacoders.com/102/thumb-1920-1021432.png"
                alt="Watch Dogs: Legion"
              />
            </div>

            <div class="carousel-item">
              <img
                src="https://images.alphacoders.com/103/thumb-1920-1037071.jpg"
                alt="Control"
              />
            </div>
          </div>

          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
