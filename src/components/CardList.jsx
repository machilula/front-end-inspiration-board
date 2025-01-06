import { Card } from './Card';

export const CardList = (props) => {

  // const handleDeleteCard = (id) => {
    
  // };

  const allCards = props.cards.map((card, index) => {
      return <Card key={index} message={card.message} likes={card.likes}/>
  });
  
  return <ul>{allCards}</ul>
};

