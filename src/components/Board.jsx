import { CardList } from "./CardList";
import { NewCardForm } from "./NewCardForm";

export const Board = (props) => {
  return (
    <div>
      <section>
        <h2>Cards for {props.title}</h2>
        <CardList cards={props.cards}/>
      </section>
      <section>
        <NewCardForm onNewCard={props.onNewCard}/>
      </section>
    </div>

  )

};
