import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  
  function handleClosePopup() {
    const popup = document.querySelector('.popup');
    const closeButton = document.querySelector('.popup__close');
    closeButton.addEventListener('click', popup.classList.remove("popup_opened"))
  }
  return (
    <div className="App">
      <div className='body'>
        <div className="page">
          <Header />
          <Main />
          <section className="popup popup_new-place" aria-label="добавление проекта">
            <div className="popup__container popup__container_place">
              <h3 className="popup__title">Новый проект</h3>
              <form
                className="popup__form popup__form_place"
                name="add-card-form"
                novalidate
              >
                <input
                  type="text"
                  id="place-card"
                  name="name"
                  placeholder="Название"
                  value=""
                  className="popup__input popup__input_type_designation"
                  minLength="2"
                  maxLength="30"
                  required
                />
                <span className="place-card-error popup__input-error"></span>
                <input
                  type="url"
                  id="link-card"
                  name="link"
                  placeholder="Ссылка на картинку"
                  value=""
                  className="popup__input popup__input_type_card-link"
                  required
                />
                <span className="link-card-error popup__input-error"></span>
                <button type="submit" className="popup__save popup__save_place"
                  >Создать</button
                >
              </form>
              <button
                type="button"
                className="popup__close popup__close_new-place"
                aria-label="закрыть форму добавления проекта"
                title="закрыть форму добавления проекта"
                onClick={handleClosePopup}
              ></button>
            </div>
          </section>			
          <section className="popup popup_show-zoom" aria-label="просмотр фотографии">
            <div className="popup__container-zoom">
              <img src="#" alt="" className="popup__card" />
              <p className="popup__subtitle-zoom"></p>
              <button
                type="button"
                className="popup__close popup__close_show-zoom"
                aria-label="закрыть изображение"
                title="закрыть изображение"
              ></button>
            </div>
          </section>
          <section className="popup popup_delete-card" aria-label="подтверждение">
            <div className="popup__container popup__container_delete-card">
              <h3 className="popup__title">Уже уходите?</h3>
              <form
                className="popup__form popup__form_delete-card"
                name="delete-card-form"
                novalidate
              >
                <button type="submit" className="popup__save popup__save_delete-card"
                  >Да</button
                >
              </form>
              <button
                type="button"
                className="popup__close popup__close_delete-card"
                aria-label="закрыть форму подтверждения"
                title="закрыть форму подтверждения"
              ></button>
            </div>
          </section>
          <Footer />
        </div>
        <template className="cards-template">
          <li className="card">
            <img src="#" alt="" className="card__image" />
            <div className="card__trash"></div>
            <div className="card__pitch">
              <h2 className="card__title"></h2>
              <div className="card__popular">
                <button type="button" className="card__like"></button>
                <span className="card__like-counter">0</span>
              </div>
            </div>
          </li>
        </template>
      </div>
    </div>
  );
}
  

export default App;
