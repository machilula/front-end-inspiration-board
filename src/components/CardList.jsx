import { Card } from './Card';
import propTypes from 'prop-types';
import './CardList.css'

export const CardList = (props) => {

  const allCards = props.cards.map((card, index) => {
      return <Card key={index} message={card.message} likes={card.likes}/>
  });
  
  return <ul class="cards">{allCards}</ul>
};

CardList.propTypes = {
  cards: propTypes.arrayOf(propTypes.shape({
    message: propTypes.string.isRequired,
    likes: propTypes.number.isRequired
  })).isRequired,
};