import { useState } from "react";

const initialValue = {
    message: '',
    preview: ''
  };

export const NewCardForm = (props) => {
  const [card, setCard] = useState(initialValue);

  const handleCardChange = (event) => {
    setCard(prevCard => {
      return {...prevCard, [event.target.id]: event.target.value}
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onNewCard(card);
    setCard(initialValue)
  };

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
          <p>preview: {handleCardChange}</p>
        </div>
        <input type="submit" value='Create'/>
      </form>
    </div>
  )
};


