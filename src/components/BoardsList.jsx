import { Board } from './Board';

export const BoardsList = (props) => {
  const allBoards = props.boards.map((board, index) => {
    return <option key={index} value={board.title}>{board.title}</option>
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
