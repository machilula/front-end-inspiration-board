import { CardList } from "./CardList";
import './Board.css';

export const Board = ({ board, onDeleteCard }) => {
  
  return (
    <div>
      <section className="Board">
        <CardList cards={board.cards} onDeleteCard={onDeleteCard}/>
      </section>
    </div>

  )

};
