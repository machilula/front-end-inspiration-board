import { CardList } from "./CardList";
import { NewCardForm } from "./NewCardForm";

export const Board = ({ board, onNewCard }) => {
  console.log(board);
  
  return (
    <div>
      <section>
        <h2>Cards for {board.title}</h2>
        <CardList cards={board.cards}/>
      </section>
      <section>
        <NewCardForm onNewCard={onNewCard}/>
      </section>
    </div>

  )

};
