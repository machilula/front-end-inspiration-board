import { Board } from './Board';

// boardlist does not use the board component

export const BoardsList = ({ boards, onSelectBoard }) => {
  const boardTitles = boards.map((board) => {
    return <option key={board.id} value={board.id}>{board.title}</option>
  });

  return (
    <div>
      <h2>Boards</h2>
      <select onChange={(e) => onSelectBoard(e.target.value)}>
      {boardTitles}
      </select>
    </div>
  );
};
