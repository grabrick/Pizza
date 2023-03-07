import React, { useState } from "react";
import "./Categories.css";

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [toggle, setToggle] = useState(false)
  const [selected, setSelected] = useState(0)
  const category = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые']
  const list = ['популярности', 'цене', 'алфавиту']

  const onClickCategory = (index: number) => {
    setActiveIndex(index)
  }

  const onSelected = (i: number) => {
    setSelected(i)
    setToggle(false)
  }

  return (
    <div className="categories">
      <div className="categories__container">
        <div className="categories__buttons">
          {
            category.map((value, i) => {
              return <button key={i} onClick={() => onClickCategory(i)} className={activeIndex === i ? 'active__category' : 'categories__button'} >{value}</button>
            })
          }
        </div>
        <div className="categories__wrap">
          <p className="categories__sort">Сортировка по:</p>
          <p className="categories__filter" onClick={() => setToggle(!toggle)}>{list[selected]}</p>
          {
          toggle && (
            <div className="sort__container">
              <div className="sort__popup">
                <ul className="sort__list">
                  {
                    list.map((value, i) => {
                      return <li key={i} onClick={() => onSelected(i)} className={selected === i ? 'sort__li sort__active' : 'sort__li'}>{value}</li>
                    })
                  }
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Categories;
