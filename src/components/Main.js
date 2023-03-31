import React from 'react';
import avatar from '../images/ava-panda.jpg';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';

function Main() {
  function handleAddProjectClick() {
    const popup = document.querySelector('.popup');
    popup.classList.add("popup_opened");
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
            <div className="card__trash"></div>
            <div className="card__pitch">
              <h2 className="card__title">Проект 1</h2>
              <div className="card__popular">
                <button type="button" className="card__like"></button>
                <span className="card__like-counter">0</span>
              </div>
            </div>
          </li>
          <li className="card">
            <img src={img2} alt="" className="card__image" />
            <div className="card__trash"></div>
            <div className="card__pitch">
              <h2 className="card__title">Проект 2</h2>
              <div className="card__popular">
                <button type="button" className="card__like"></button>
                <span className="card__like-counter">0</span>
              </div>
            </div>
          </li>
          <li className="card">
            <img src={img3} alt="" className="card__image" />
            <div className="card__trash"></div>
            <div className="card__pitch">
              <h2 className="card__title">Проект 3</h2>
              <div className="card__popular">
                <button type="button" className="card__like"></button>
                <span className="card__like-counter">0</span>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default Main