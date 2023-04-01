import React from 'react';

function PopupWithImage() {
  return (
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
  )
}

export default PopupWithImage