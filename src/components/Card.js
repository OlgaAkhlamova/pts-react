import React from 'react';

function Card(name, link) {

  function handleTrashClick() {
    const element = document.querySelector('.card');
    element.remove();
  }

  function handleLikeClick() {
    const buttonLike = document.querySelector('.card__like');
    const counter = document.querySelector('.card__like-counter');
    const isLike = buttonLike.classList.contains("card__like_active");
    if (!isLike) {
      buttonLike.classList.add('card__like_active');
      counter.textContent = "1"}
    else {
      buttonLike.classList.remove('card__like_active');
      counter.textContent = "0"}
  }

  return (
    <li className="card">
      <img src={link} alt={name} className="card__image" />
      <div className="card__trash"
      onClick={handleTrashClick}/>
      <div className="card__pitch">
        <h2 className="card__title">{name}</h2>
        <div className="card__popular">
          <button type="button" className="card__like"
          onClick={handleLikeClick}/>
          <span className="card__like-counter">0</span>
        </div>
      </div>
    </li>
  )
}
export default Card