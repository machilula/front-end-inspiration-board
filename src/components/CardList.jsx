import { Card } from './Card';
import propTypes from 'prop-types';

export const CardList = (props) => {

  const allCards = props.cards.map((card, index) => {
      return <Card key={index} message={card.message} likes={card.likes}/>
  });
  
  return <ul>{allCards}</ul>
};

CardList.propTypes = {
  cards: propTypes.arrayOf(propTypes.shape({
    message: propTypes.string.isRequired,
    likes: propTypes.number.isRequired
  })).isRequired,
};