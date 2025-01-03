import { Card } from './Card';

export const CardList = (props) => {
  const allCards = props.cards.map((card, index) => {
      return <Card key={index} title={card.message}/>
  });
  
  return <ul>{allCards}</ul>
};

