import React from 'react';
import editAvatarIcon from '../images/edit-avatar-icon.svg'
import editIcon from '../images/edit-icon.svg'
import addIcon from '../images/add-icon.svg'
import {api} from '../utils/Api.js';
import Card from './Card.js';


function Main (props){
    const [userName, setUserName] = React.useState();
    const [userDescription , setUserDescription ] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);
    const [userId, setUserId] = React.useState();


    React.useEffect(() => {
         api.getUserInfo()
         .then((userInfo)=>{
             setUserName(userInfo.name);
             setUserDescription(userInfo.about);
             setUserAvatar(userInfo.avatar);
             setUserId(userInfo._id);
            })

        api.getCards()
        .then((cardsList)=>{
        setCards(cardsList);
        }) 
    },[])

    return(<main className="content">
    <section className="profile">
        <div className="profile__avatar-container">
            <button onClick={props.onEditAvatar} className="profile__edit-avatar-button" type="button" name="avatar"><img className="profile__add-icon" src={editAvatarIcon} alt="Редактировать аватар"/></button>
            <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}></div>
        </div>
        <div className="profile__info info">
            <div className="info__container">
                <h1 className="info__name">{userName}</h1>
                <p className="info__job-title">{userDescription}</p>
            </div>
            <button onClick={props.onEditProfile} className="info__edit-button" type="button" name="edit"><img className="info__edit-icon"
        src={editIcon} alt="Редактировать"/></button>
        </div>
        <button onClick={props.onAddPlace} className="profile__add-button" type="button" name="add"><img className="profile__add-icon"
      src={addIcon} alt="Добавить"/></button>
    </section>

    <section className="elements">
       {cards.map((card) => {  
      return( <li className="element" key={card._id}> 
         <Card onCardClick={props.onCardClick} card={card} userId={userId}/>
         </li> )
       }
    )} 
     </section>
</main>);
}

export default Main;