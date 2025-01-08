import { CardList } from "./CardList";

export const Board = ({ board, onDeleteCard }) => {
  
  return (
    <div>
      <section className="Board">
        <CardList cards={board.cards} onDeleteCard={onDeleteCard}/>
      </section>
    </div>

  )

};
