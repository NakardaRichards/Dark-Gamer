import React from "react";
import "./index.css";
import "../css/about.css";

export const AboutClub = () => {
  return (
    <React.Fragment>
      <div className="aboutClub">
        <h1
          style={{
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          About Us.
        </h1>
        <p
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            textAlign: "center",
          }}
        >
          Dark Gamer is an online club that focuses on the modification
          "modding" of any games we please that is not on a console. As a club
          we prefer to mod open world games as oppose to linear games. When you
          think of big AAA games like GTA V and The Witcher 3, those games are
          ideal for modification because of the mechanics of the games and also
          the structure of the vast sandbox.We don't like to mod games if they
          don't have a good storyline and an atmosphere that soothes the theme
          of said game. In short we don't mod dumb low quality games. But they
          also are huge AAA games that are amazing but sadly they are story
          driven or linear in nature so we stay away from them.
        </p>
        <br></br>
        <p
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            textAlign: "center",
          }}
        >
          We honestly spend most of our time modding GTA V. The possibilities
          seem limitless and we take advantage of that. From real life mods to
          superhero mods, GTA V is the mod spot and that's why we love it. Ok
          enough of games for now Dark Gamer consists of senior level Software
          Engineers who have time to kill and not script kiddies. So we know
          what we are doing.We don't try to mod a game until we have a basic
          understanding of that game mechanics. For example in how early days we
          attempted to mod GTA San Andreas which is arguably the greatest GTA
          when it comes to atmosphere. The game was originally 3.46 GB or
          something but when we finished it was over 40 GB. The graphics and
          everything got a massive overhaul but it was way too much for that
          game to handle so it crashed at certain regions. It was a game made in
          2004 after all so don't push too much.
        </p>
      </div>
    </React.Fragment>
  );
};

export default AboutClub;
