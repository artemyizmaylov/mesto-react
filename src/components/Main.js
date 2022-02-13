import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import ConfirmChildren from './ConfirmChildren.js';
import AvatarChildren from './AvatarChildren.js';
import PlaceChildren from './PlaceChildren.js';
import ProfileChildren from './ProfileChildren.js';
import Card from './Card.js';

import api from '../utils/Api.js';

import React, { useEffect, useState } from 'react';

function Main(props) {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUser()
      .then((res) => {
        setUserName(res['name']);
        setUserDescription(res['about']);
        setUserAvatar(res['avatar']);
      })
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    api
      .getCards()
      .then((res) => setCards(res))
      .catch((err) => console.log(err));
  });

  return (
    <main className="main">
      <div className="profile">
        <div className="profile__info">
          <div
            className="profile__avatar-container"
            onClick={props.onEditAvatar}
          >
            <div
              style={{ backgroundImage: `url(${userAvatar})` }}
              className="profile__avatar"
            />
          </div>
          <div className="profile__text">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="button profile__edit-button"
              type="button"
              onClick={props.onEditProfile}
            ></button>
            <p className="profile__about">{userDescription}</p>
          </div>
        </div>
        <button
          className="button profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </div>
      <ul className="places">
        {cards.map((card, i) => (
          <li className="place" key={i}>
            <Card card={card} onCardClick={props.onCardClick} />
          </li>
        ))}
      </ul>

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        children={ProfileChildren}
        isOpen={props.isOpen.profile}
        onClose={props.onClose}
      />

      <PopupWithForm
        name="place"
        title="Новое место"
        children={PlaceChildren}
        isOpen={props.isOpen.place}
        onClose={props.onClose}
      />

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        children={AvatarChildren}
        isOpen={props.isOpen.avatar}
        onClose={props.onClose}
      />

      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        children={ConfirmChildren}
        isOpen={false}
      />

      <ImagePopup card={props.card} onClose={props.onClose} />
    </main>
  );
}

export default Main;
