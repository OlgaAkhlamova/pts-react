import React from 'react';

function PopupDescription({onClose, onCloseOverlay}) {

  
  return (
    <section className="popup popup_description" aria-label="описание" 
      id="popup_description"
      onClick={onCloseOverlay}>
      <div className="popup__container popup__container_description">
        <h3 className="popup__title">Интересно?</h3>
        <form
          className="popup__form popup__form_description"
          name="description-form"
          noValidate
        >
          <p className='popup__description'>Это набросок описания функционала некоего компонента, 
          о котором тут пойдет речь. </p>
          <button type="submit" className="popup__save popup__save_description"
            >Да</button>
        </form>
        <button
          type="button"
          id="description"
          className="popup__close popup__close_description"
          aria-label="закрыть описание"
          title="закрыть описание"
          onClick={onClose}
        />
      </div>
    </section>
  )
}

export default PopupDescription