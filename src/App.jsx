import { useState } from 'react';
import { BoardsList } from './components/BoardsList';
import { NewBoardForm } from './components/NewBoardForm';
import { Board } from './components/Board';
import './App.css';

const BOARDS = [
  {
    id: 1,
    title: 'Test A',
    creator: 'Lula',
    cards: [
      {
        id: 1,
        message: 'AAA',
        likes: 5
      },
      {
        id: 2,
        message: 'BBB',
        likes: 2
      },
      {
        id: 3,
        message: 'CCC', 
        likes: 6
      }
    ]
  },
  {
    id: 2,
    title: 'Test B',
    creator: 'Lula',
    cards: [
      {
        id: 1,
        message: '111',
        likes: 4
      },
      {
        id: 2,
        message: '222',
        likes: 0
      }
    ]
  },
  {
    id: 3,
    title: 'Test C',
    creator: 'Lula',
    cards: []
  }
];

function App() {
  const [boardData, setBoardData] = useState(BOARDS);
  const [selectedBoard, setSelectedBoard] = useState({});
  const [isBoardSelected, setIsBoardSelected] = useState(false);

  const addBoard = (newBoard) => {
    newBoard['cards'] = [];
    setBoardData(prevBoard => [...prevBoard, newBoard]);
  };

  const selectBoard = (boardId) => {
    if (!boardId) {
      setSelectedBoard({});
      setIsBoardSelected(false);
      return;
    }

    for (const board of boardData) {
      if (board.id == boardId) {
        setSelectedBoard(board);
        setIsBoardSelected(true);
        return;
      }
    }
  }

  const currentBoardTitle =  `${selectedBoard.title} by ${selectedBoard.creator}`; 


  return (
    <>
      <header>
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <section className='boards-container'>
          <BoardsList boards={boardData} onSelectBoard={selectBoard} />
          <div>
            <h2> Selected Board </h2>
            <p> { isBoardSelected ? currentBoardTitle : 'None'}</p>
          </div>
          <NewBoardForm onNewBoard={addBoard}/>
        </section>
        <section>
          {isBoardSelected ? <Board board={selectedBoard} onNewCard={() => console.log('You added a new card!')} /> : ''}
        </section>
      </main>
    </>
  );
}

export default App
