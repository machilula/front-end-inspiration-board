import { Card } from './Card';
import './CardList.css'

export const CardList = (props) => {

  // const handleDeleteCard = (id) => {
    
  // };

  const allCards = props.cards.map((card, index) => {
      return <Card key={index} message={card.message} likes={card.likes}/>
  });
  
  return <ul class="cards">{allCards}</ul>
};

