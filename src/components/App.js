import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import PopupWithConfirm from './PopupWithConfirm';
import PopupWithImage from './PopupWithImage';
import Footer from './Footer';

function App() {
  return (  
    <div className="page">
      <Header />
      <Main />
      <PopupWithForm />		
      <PopupWithImage />
      <PopupWithConfirm />
      <Footer />
    </div>
    
  );
}
  

export default App;
