import { useState } from "react";
import './NewCardForm.css';

const initialValue = {
    message: ''
  };

export const NewCardForm = (props) => {
  const [card, setCard] = useState(initialValue);
  const [showCardForm, setShowCardForm] = useState(false);

  const handleCardChange = (event) => {
    setCard(prevCard => {
      return {...prevCard, [event.target.id]: event.target.value}
    });
  };

  const handleShowCardForm = () => {
    setShowCardForm(true);
    setCard(initialValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(card)
    props.onNewCard(card);
    setCard(initialValue)
  };
  
  if (showCardForm) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='message'>Message</label>
            <input
              type='text'
              id='message'
              value={card.message}
              onChange={handleCardChange}/>
          </div>
          <div>
            <p>preview: {card.message}</p>
          </div>
          <input type="submit" value='Create'/>
        </form>
        <button className="card-btn" onClick={() => setShowCardForm(false)}>Hide New Card</button>
      </div>
    )
  } else {
    return (
      <button className="card-btn" onClick={handleShowCardForm}>NEW CARD</button>
    )
  }
};


