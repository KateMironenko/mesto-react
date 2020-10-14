import React from 'react';
import closeIcon from '../images/close-icon.svg';

function PopupWithForm (props){

    return(
    <>
    <section className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`}>
    <div className="popup__form-container">
        <form className={`popup__form popup__form_${props.name}`} name={`${props.name}_form`} noValidate>
            <h2 className="popup__heading">{props.title}</h2>
            {props.children}
        </form>
        <button className="popup__btn-close" type="reset" name="close" onClick={props.onClose}>
        <img className="popup__close-icon" src={closeIcon} alt="Закрыть"/>
        </button>
    </div>
</section>
    </>
);
}

export default PopupWithForm;