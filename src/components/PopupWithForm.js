import React from 'react';
import {useRef} from 'react';

function PopupWithForm({onClose, onCloseOverlay}) {

  const refname = useRef();
  const reflink = useRef();

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
    <section className="popup popup_new-project"
      id="popup_new-project" 
      aria-label="добавление проекта"
      onClick={onCloseOverlay}>
      <div className="popup__container popup__container_project">
        <h3 className="popup__title">Новый проект</h3>
        <form
          className="popup__form popup__form_project"
          name="add-card-form"
          noValidate
        >
          <input
            type="text"
            id="project-card"
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
          <span className="project-card-error popup__input-error"></span>
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
          <button type="submit" className="popup__save popup__save_project"
          onSubmit={handleSubmitProject}
            >Создать</button>
        </form>
        <button
          type="button"
          id="new-project"
          className="popup__close popup__close_new-project"
          aria-label="закрыть форму добавления проекта"
          title="закрыть форму добавления проекта"
          onClick={onClose}
        ></button>
      </div>
    </section>	
  )
}

export default PopupWithForm