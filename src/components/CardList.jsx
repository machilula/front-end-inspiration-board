import { Card } from './Card';

export const CardList = ({ cards }) => {
  const allCards = cards.map((card, index) => {
      return <Card key={index} message={card.message} likes={card.likes}/>
  });
  
  return <ul>{allCards}</ul>
};

