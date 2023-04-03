import React from 'react';

function PopupWithImage({onClose, onCloseOverlay}) {

  return (
    <section className="popup popup_show-zoom" 
      id="popup_show-zoom"
      aria-label="просмотр фотографии" 
      onClick={onCloseOverlay}>
      <div className="popup__container-zoom">
        <img src="#" alt="" className="popup__card" />
        <p className="popup__subtitle-zoom"></p>
        <button
          type="button"
          id="show-zoom"
          className="popup__close popup__close_show-zoom"
          aria-label="закрыть изображение"
          title="закрыть изображение"
          onClick={onClose}
        ></button>
      </div>
    </section>
  )
}

export default PopupWithImage