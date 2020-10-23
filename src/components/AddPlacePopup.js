import React from 'react';
import PopupWithForm from './PopupWithForm.js'

function AddPlacePopup (props){

  const tileInputRef = React.useRef(); 
  const linkInputRef = React.useRef(); 


  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(tileInputRef.current.value, linkInputRef.current.value);
  } 

    return(
        <PopupWithForm isOpen={props.isOpen} name={"add"} title={"Новое место"} onSubmit={handleSubmit} children={<>
            <fieldset className="popup__input-container">
                        <input ref={tileInputRef} className="popup__item popup__item_el_title" id="title-input" name="title" type="text" placeholder="Название" required minLength="1 " maxLength="30"/>
                        <span id="title-input-error" className="popup__item-error"></span>
                        <input ref={linkInputRef} className="popup__item popup__item_el_link" id="link-input" name="link" type="url" placeholder="Ссылка на картинку" required/>
                        <span id="link-input-error" className="popup__item-error"></span>
                    </fieldset>
        </>} onClose={props.onClose} buttonText={"Создать"}/>
);
}

export default AddPlacePopup;