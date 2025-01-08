import './BoardsList.css';

export const BoardsList = ({ boards, onSelectBoard }) => {
  const boardTitles = boards.map((board) => {
    return <option key={board.id} id={board.id} value={board.id}>{board.title}</option>
  });

  return (
    <div className='BoardsList'>
      <h2>SELECT BOARD</h2>
      <select onChange={(e) => onSelectBoard(e.target.value)}>
      <option value="">Please select a board</option>
      {boardTitles}
      </select>
      {/* <div className='select-underlay'></div> */}
      
    </div>
  );
};
