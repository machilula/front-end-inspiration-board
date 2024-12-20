import { useState } from 'react';

const initialValue = {
  title: '',
  creator: '',
};

export const NewBoardForm = (props) => {
  const [board, setBoard] = useState(initialValue);
  
  console.log(board); 

  const handleBoardChange = (event) => {
    setBoard(prevBoard => {
      return { ...prevBoard, [event.target.id]: event.target.value}
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onNewBoard(board);
    setBoard(initialValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Title</label>
        <input 
          type='text' 
          id='title' 
          value={board.title} 
          onChange={handleBoardChange}/>
      </div>
      <div>
        <label htmlFor='creator'>Creator</label>
        <input 
          type='text' 
          id='creator' 
          value={board.creator} 
          onChange={handleBoardChange}/>
      </div>
      <input type="submit" value='Create'/>
    </form>
  );
};
