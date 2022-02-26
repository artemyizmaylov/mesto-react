import Card from './Card.js';
import api from '../utils/Api.js';

import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { CardsContext } from '../contexts/CardsContext.js';

import { useContext, useState, useEffect } from 'react';

function Main(props) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);
  const { onEditAvatar, onEditProfile, onAddPlace, onCardClick } = props;

  function handleCardLike(card) {
    const isLiked = card.likes.some((like) => like._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
  }

  useEffect(() => {
    api
      .getCards()
      .then((cards) => setCards(cards))
      .catch((err) => console.log(err));
  }, []);

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
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
              />
            </li>
          ))}
        </ul>
      </main>
    </CardsContext.Provider>
  );
}

export default Main;
