import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import PopupWithConfirm from './PopupWithConfirm';
import PopupDescription from './PopupDescription';
import PopupWithImage from './PopupWithImage';
import Footer from './Footer';

function App() {

  function handleClosePopup(evt) { 
    const popup = document.getElementById(`popup_${evt.target.id}`);
    popup.classList.remove("popup_opened")
  }

  function handleOverlayClick(evt) {
    const popup = document.querySelector('.popup_opened');
    if (evt.target === evt.currentTarget) {
      popup.classList.remove("popup_opened")
    };
  }
  return (  
    <div className="page">
      <Header />
      <Main />
      <PopupWithForm 
      onClose={handleClosePopup}
      onCloseOverlay={handleOverlayClick}/>		
      <PopupWithImage 
      onClose={handleClosePopup}
      onCloseOverlay={handleOverlayClick}/>
      <PopupWithConfirm 
      onClose={handleClosePopup}
      onCloseOverlay={handleOverlayClick}/>
      <PopupDescription
      onClose={handleClosePopup}
      onCloseOverlay={handleOverlayClick}/>
      <Footer />
    </div>
    
  );
}
  

export default App;
