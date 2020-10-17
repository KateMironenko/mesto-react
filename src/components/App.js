import React from 'react';
import Header from './Header.js'
import Main from './Main.js'
import PopupWithForm from './PopupWithForm.js'
import Footer from './Footer.js'
import ImagePopup from './ImagePopup.js';

function App() {

    const [isOpen, setIsOpen] = React.useState(false);
    const [name, setName] = React.useState(false);
    const [title,   setTitle] = React.useState(false);
    const [children, setChildren] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null); 
    const [buttonText, setButtonText] = React.useState(null);



    function handleEditAvatarClick() {
        setIsOpen(true);
        setName("edit-avatar");
        setTitle("Обновить аватар");
        setChildren(<>
        <fieldset className="popup__input-container">
         <input className="popup__item popup__item_el_link" id="avatar-input" name="avatar_link" type="url" placeholder="Ссылка на картинку" required/>
         <span id="avatar-input-error" className="popup__item-error"></span>
        </fieldset>
    </>);
             setButtonText("Сохранить");

    }
    
    function handleEditProfileClick() {
        setIsOpen(true);
        setName("edit");
        setTitle("Редактировать профиль");
        setChildren(<>
                    <fieldset className="popup__input-container">
                        <input className="popup__item popup__item_el_name" id="name-input" name="name" type="text" placeholder="Имя" required minLength="2" maxLength="40"/>
                        <span id="name-input-error" className="popup__item-error"></span>
                        <input className="popup__item popup__item_el_job" id="job-input" name="job" type="text" placeholder="О себе" required minLength="2" maxLength="200"/>
                        <span id="job-input-error" className="popup__item-error"></span>
                    </fieldset>
    </>);
         setButtonText("Сохранить");
    }
    
    function handleAddPlaceClick() {
        setIsOpen(true);
        setName("add");
        setTitle("Новое место");
        setChildren(<>
        <fieldset className="popup__input-container">
                    <input className="popup__item popup__item_el_title" id="title-input" name="title" type="text" placeholder="Название" required minLength="1 " maxLength="30"/>
                    <span id="title-input-error" className="popup__item-error"></span>
                    <input className="popup__item popup__item_el_link" id="link-input" name="link" type="url" placeholder="Ссылка на картинку" required/>
                    <span id="link-input-error" className="popup__item-error"></span>
                </fieldset>
    </>);
        setButtonText("Создать");

    }

    function handleCardClick(card){
        setSelectedCard(card);
    }

    function closeAllPopups(){
        setIsOpen(false);
        setSelectedCard(null);
    }

    
    return (<div className="page" >
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={ handleAddPlaceClick} onCardClick={handleCardClick}/>
        <PopupWithForm isOpen={isOpen} name={name} title={title} children={children} onClose={closeAllPopups} buttonText={buttonText}/>
       {selectedCard && <ImagePopup card={selectedCard} onClose={closeAllPopups}/>  }
        <Footer />
         </div>
    );
}

export default App;