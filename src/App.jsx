import { useState } from 'react';
import { BoardsList } from './components/BoardsList'
import { NewBoardForm } from './components/NewBoardForm'
import './App.css'

const BOARDS = [
  {
    title: 'Test A',
    creator: 'Lula',
    cards: [
      {
        text: 'AAA'
      },
      {
        text: 'BBB'
      },
      {
        text: 'CCC'
      }
    ]
  },
  {
    title: 'Test B',
    creator: 'Lula',
    cards: [
      {
        text: '111'
      },
      {
        text: '222'
      }
    ]
  },
  {
    title: 'Test C',
    creator: 'Lula',
    cards: []
  }
];

function App() {
  const [boardData, setBoardData] = useState(BOARDS);

  const addBoard = (newBoard) => {
    newBoard['cards'] = [];

    setBoardData(prevBoard => [...prevBoard, newBoard]);
  }
  return (
    <>
      <header>
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <section className='boards-container'>
          <BoardsList boards={boardData} />
          <NewBoardForm onNewBoard={addBoard}/>
        </section>
      </main>
    </>
  );
}

export default App
