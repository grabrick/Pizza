import React from "react";
import CardRender from "./Card/CardRender";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <CardRender cardData={[]} />
    </div>
  );
}

export default Cards;
