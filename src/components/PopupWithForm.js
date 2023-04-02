import React from 'react';
import {useRef} from 'react';

function PopupWithForm({onAddProject}) {

  const refname = useRef();
  const reflink = useRef();

  function handleClosePopup(evt) { 
    const popup = document.querySelector('.popup');
    popup.classList.remove("popup_opened")
  }

  function handleOverlayClick(evt) {
    const popup = document.querySelector('.popup');
    if (evt.target === evt.currentTarget) {
      popup.classList.remove("popup_opened")
    };
  }

  function handleChangeName() {
    
    console.log('Название проекта');
    
  }

  function handleChangeLink() {
    console.log('Ссылка на иллюстрацию')
  }

  function handleSubmitProject(evt) { // не работает:
    evt.preventDefault();             // страница перезагружается
   
  }
  return (
    <section className="popup popup_new-place" aria-label="добавление проекта" onClick={handleOverlayClick}>
      <div className="popup__container popup__container_place">
        <h3 className="popup__title">Новый проект</h3>
        <form
          className="popup__form popup__form_place"
          name="add-card-form"
          noValidate
        >
          <input
            type="text"
            id="place-card"
            name="name"
            placeholder="Название"
            ref={refname}
            // value={name || ""}
            className="popup__input popup__input_type_designation"
            minLength="2"
            maxLength="30"
            onChange={handleChangeName}
            required
          />
          <span className="place-card-error popup__input-error"></span>
          <input
            type="url"
            id="link-card"
            name="link"
            placeholder="Ссылка на картинку"
            ref={reflink}
            // value={link || ""}
            className="popup__input popup__input_type_card-link"
            onChange={handleChangeLink}
            required
          />
          <span className="link-card-error popup__input-error"></span>
          <button type="submit" className="popup__save popup__save_place"
          onSubmit={handleSubmitProject}
            >Создать</button>
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
  )
}

export default PopupWithForm