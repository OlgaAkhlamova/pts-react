import React from 'react';

function Card({card, onTrashClick, onLikeClick}) {
  
  return (
    <li className="card" key={card.id}>
      <img src={card.link} alt={card.name} className="card__image" />
      <div 
      className="card__trash"
      onClick={onTrashClick}/>
      <div className="card__pitch">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__popular">
          <button type="button" className="card__like" id={card.id}
          onClick={onLikeClick}/>
          <span type="text" className="card__like-counter" id={`${card.id}-s`}>0</span>
        </div>
      </div>
    </li>
  )
}
export default Card