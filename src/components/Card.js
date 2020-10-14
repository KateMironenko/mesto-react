import React from 'react';

function Card (props){
    function handleClick() {
        props.onCardClick(props.card);
      } 
      
    return(  < >
                {props.userId===props.card.owner._id && <button className="element__trash"
                    type="button"> </button>} 
                    <div className="element__photo"
                    style={{ backgroundImage: `url(${props.card.link})`, backgroundSize: `cover`
                }} onClick={handleClick}></div>
                    <p className="element__name">{props.card.name}</p> 
                    <div className="element__likes-container" >
            <button className="element__like" type="button" > 
            </button>  {props.card.likes.length > 0 && <p className={`element__likes-number`} >{props.card.likes.length}</p> }
                            </div>
                             </>
                           );
}

export default Card;