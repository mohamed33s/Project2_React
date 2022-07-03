import React from "react";

function Cards(props) {
  return (
    <>
      <div className="movie">
        <div className="rank">{props.cards.rating}</div>
        <div className="front">
          <img src={props.cards.img} alt="movie" />
          <h3 class="name">{props.cards.title}</h3>

          <br />
          <br />
        </div>
        <div className="back">
          <p className="story">{props.cards.story}</p>
          <p id="year">{props.cards.year}</p>
          <button className="btn">Watching the Movie</button>
        </div>
        <div className="backgroundWrapper"></div>
      </div>
    </>
  );
}

export default Cards;
