import { Board } from './Board';

export const BoardsList = (props) => {
  const allBoards = props.boards.map((board, index) => {
    return <Board key={index} title={board.title}/>
  });

  return (
    <div>
      <h2>Boards</h2>
      <select onChange={() => console.log('You\ve Changed!')}>
       {allBoards}
      </select>
    </div>
  );
};
