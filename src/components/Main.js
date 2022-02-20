import Card from './Card.js';
import api from '../utils/Api.js';
import { useEffect, useState } from 'react';

function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
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
  }, []);

  useEffect(() => {
    api
      .getCards()
      .then((res) => setCards(res))
      .catch((err) => console.log(err));
  }, []);

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
        {cards.map((card) => (
          <li className="place" key={card._id}>
            <Card card={card} onCardClick={props.onCardClick} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Main;
