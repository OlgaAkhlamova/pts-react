import React from 'react';
import avatar from '../images/ava-panda.jpg';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import { initialCards } from '../utils/cards';
import Card from '../components/Card';

function Main() {

  function handleAddProjectClick() {
    const popup = document.querySelector('.popup_new-project');
    popup.classList.add("popup_opened");
  } 

  function handleTrashClick(evt) {      
    // evt.currentTarget.closest('.card').remove();
    const popupDescr = document.querySelector('.popup_description');
    popupDescr.classList.add("popup_opened");
  }

  function handleLikeClick(evt) {      
    const isLike = evt.target.classList.contains("card__like_active");
    const counter= document.getElementById(`${evt.target.id}-s`); 
    if (!isLike) {
      evt.target.classList.add('card__like_active');
      counter.textContent = "1"
    } else {
      evt.target.classList.remove('card__like_active');
      counter.textContent = "0"
    }
    
  }

  return (
    <main className="container" aria-label="страница проектов">
      <section className="profile">
        <div className="profile__items">
          <img
            src={avatar}
            alt="смешная аватарка"
            className="profile__avatar"
            name="avatar"
          />
          <div className="profile__info">
            <div className="profile__info-item">
              <h1 className="profile__info-name" name="name">Programming</h1>
            </div>
            <p className="profile__info-job" name="about">Training Sketches</p>
          </div>
        </div>
        <button
          className="profile__card-add"
          type="button"
          aria-label="добавить проект"
          title="добавить проект"
          onClick={handleAddProjectClick}
        ></button>
      </section>
      <section className="elements" aria-label="мои проекты">
        <ul className="cards">
        <li className="card">
            <img src={img1} alt="" className="card__image" />
            <div 
            className="card__trash"
            onClick={handleTrashClick}/>
            <div className="card__pitch">
              <h2 className="card__title">Проект 1</h2>
              <div className="card__popular">
                <button type="button" className="card__like" id="one"
                onClick={handleLikeClick}/>
                <span type="text" className="card__like-counter" id="one-s">0</span>
              </div>
            </div>
          </li>
          <li className="card">
            <img src={img2} alt="" className="card__image" />
            <div 
            className="card__trash"
            onClick={handleTrashClick}/>
            <div className="card__pitch">
              <h2 className="card__title">Проект 2</h2>
              <div className="card__popular">
                <button type="button" className="card__like" id="two"
                onClick={handleLikeClick} />
                <span type="text" className="card__like-counter" id="two-s">0</span>
              </div>
            </div>
          </li>
          <li className="card">
            <img src={img3} alt="" className="card__image" />
            <div 
            className="card__trash"
            onClick={handleTrashClick}/>
            <div className="card__pitch">
              <h2 className="card__title">Проект 3</h2>
              <div className="card__popular">
                <button type="button" className="card__like" id="three"
                onClick={handleLikeClick}/>
                <span type="text" className="card__like-counter" id="three-s">0</span>
              </div>
            </div>
          </li>
          {initialCards.map((card) => (
            <Card
            card={card}
            key={card.id}
            onTrashClick={handleTrashClick}
            onLikeClick={handleLikeClick}/>
          //   <li className="card">
          //   <img src={card.link} alt={card.name} className="card__image" />
          //   <div 
          //   className="card__trash"
          //   onClick={handleTrashClick}/>
          //   <div className="card__pitch">
          //     <h2 className="card__title">{card.name}</h2>
          //     <div className="card__popular">
          //       <button type="button" className="card__like" id={card.id}
          //       onClick={handleLikeClick}/>
          //       <span type="text" className="card__like-counter" id={`${card.id}-s`}>0</span>
          //     </div>
          //   </div>
          // </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main