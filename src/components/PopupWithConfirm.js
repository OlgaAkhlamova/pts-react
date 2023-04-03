import React from 'react';

function PopupWithConfirm({onClose, onCloseOverlay}) {

  
  return (
    <section className="popup popup_delete-card" 
      id="popup_delete-card"
      aria-label="подтверждение" 
      onClick={onCloseOverlay}>
      <div className="popup__container popup__container_delete-card">
        <h3 className="popup__title">Уже уходите?</h3>
        <form
          className="popup__form popup__form_delete-card"
          name="delete-card-form"
          noValidate
        >
          <button type="submit" className="popup__save popup__save_delete-card"
            >Да</button>
        </form>
        <button
          type="button"
          id="delete-card"
          className="popup__close popup__close_delete-card"
          aria-label="закрыть форму подтверждения"
          title="закрыть форму подтверждения"
          onClick={onClose}
        />
      </div>
    </section>
  )
}

export default PopupWithConfirm
