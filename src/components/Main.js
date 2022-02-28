import { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { CardsContext } from '../contexts/CardsContext.js';

import Card from './Card.js';
import api from '../utils/Api.js';

function Main(props) {
  const {
    onEditAvatar,
    onEditProfile,
    onAddPlace,
    onCardClick,
    cards,
    onCardDelete,
    onCardLike,
  } = props;

  const currentUser = useContext(CurrentUserContext);

  return (
    <CardsContext.Provider value={cards}>
      <main className="main">
        <div className="profile">
          <div className="profile__info">
            <div className="profile__avatar-container" onClick={onEditAvatar}>
              <div
                style={{ backgroundImage: `url(${currentUser.avatar})` }}
                className="profile__avatar"
              />
            </div>
            <div className="profile__text">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="button profile__edit-button"
                type="button"
                onClick={onEditProfile}
              ></button>
              <p className="profile__about">{currentUser.about}</p>
            </div>
          </div>
          <button
            className="button profile__add-button"
            type="button"
            onClick={onAddPlace}
          ></button>
        </div>
        <ul className="places">
          {cards.map((card) => (
            <li className="place" key={card._id}>
              <Card
                card={card}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            </li>
          ))}
        </ul>
      </main>
    </CardsContext.Provider>
  );
}

export default Main;
