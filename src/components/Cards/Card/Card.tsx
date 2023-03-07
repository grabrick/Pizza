import React, {useState, FC} from "react";
import "../Cards.css";
import { cardItem } from "../../../assets/types/types"

const Card:FC<cardItem> = ({ title, price, types, size, image }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [activeIndexSize, setActiveIndexSize] = useState<number>(0)
  const [count, setCount] = useState<number>(0);
  const typedName: string[] = ['тонкое', 'пышное']

  const onClickCategory = (index: number) => {
    setActiveIndex(index)
  }
  
  const onClickSize = (index: number) => {
    setActiveIndexSize(index)
  }

  return (
    <div className="card">
      <div className="card__container">
        <img className="card__image" src={image} alt="pizza" />
        <h1 className="card__title">{title}</h1>
        <div className="card__wrapper">
          {
            types.map((valueID, i) => {
              return <button key={i} onClick={() => onClickCategory(valueID)} className={activeIndex === valueID ? 'card__button-active' : 'card__button'}>{typedName[valueID]}</button>
            })
          }
        </div>
        <div className="card__wrapper">
          {
            size.map((value, i) => {
              return  <button key={i} onClick={() => onClickSize(i)} className={activeIndexSize === i ? 'card__button-active' : 'card__button'}>{value} см.</button>
            })
          }
        </div>
        <div className="card__wrap" onClick={() => setCount(count + 1)}>
          <button className="card__add">
            <span className="card__add_plus">+</span>Добавить<span className="card__add_plus">{count}</span>
          </button>
          <p className="card__text">от {price} ₽</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
