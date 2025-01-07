import { useState } from 'react';
import { useEffect } from 'react';
import { BoardsList } from './components/BoardsList';
import { NewBoardForm } from './components/NewBoardForm';
import { Board } from './components/Board';
import { getAllBoards } from './httpRequests/boardRequests';
import './App.css';

// const BOARDS = [
//   {
//     id: 1,
//     title: 'Test A',
//     creator: 'Lula',
//     cards: [
//       {
//         id: 1,
//         message: 'AAA',
//         likes: 5
//       },
//       {
//         id: 2,
//         message: 'BBB',
//         likes: 2
//       },
//       {
//         id: 3,
//         message: 'CCC', 
//         likes: 6
//       }
//     ]
//   },
//   {
//     id: 2,
//     title: 'Test B',
//     creator: 'Lula',
//     cards: [
//       {
//         id: 1,
//         message: '111',
//         likes: 4
//       },
//       {
//         id: 2,
//         message: '222',
//         likes: 0
//       }
//     ]
//   },
//   {
//     id: 3,
//     title: 'Test C',
//     creator: 'Lula',
//     cards: []
//   }
// ];

function App() {
  const [boardData, setBoardData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({});
  const [isBoardSelected, setIsBoardSelected] = useState(false);

  useEffect(() => {
    getAllBoards()
    .then( response => setBoardData(response.data))
    .catch(error => console.log(`couldn't update board data: ${error}`))
  }, []);
    // make a GET call to API to retrieve all boards

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

  //  addCard does not render a new card. WIP
  const addCard = (boardId, newCard) => {
    // make a post request to add new card

    // call setselectedboard to copy board object
    // pass in newcards to new board object
    // call setboarddata to update the board object

    // let newCards = [];
    // setSelectedBoard((prevBoard) => {
    //   return {...prevBoard, cards: prevBoard.cards.push(newCard)};
    // });

    // setBoardData((prevBoard) => {
    //   console.log([...prevBoard, selectedBoard])
    //   return [...prevBoard, selectedBoard];
    // })
    setBoardData((boardData) => boardData.map(board => {
      if (board.id === boardId) {
        return {...board, cards: [...board.cards, newCard]};
      } else return board;
      // newCards = [...board.cards];
      // newCards.push(newCard);
      // board['cards'] = [board.cards, newCard]
      
    }));
    
    selectBoard(boardId);
  };
  

//  deleteCard event handler WIP, does not work
  const deleteCard = (boardId, cardId) => {
    setBoardData(boardData => boardData.map(board => {
      if (board.id === boardId) {
        board.cards.filter(card => {
          return card.id !== cardId;
        })
      } else {
        return;
      }
    }));
  };

  return (
    <>
      <header>
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <section className='boards-container'>
          {/* do the functions being passed down to board  */}
          <BoardsList boards={boardData} onSelectBoard={selectBoard} />
          <div>
            <h2> Selected Board </h2>
            <p> { isBoardSelected ? currentBoardTitle : 'None'}</p>
          </div>
          <NewBoardForm onNewBoard={addBoard}/>
        </section>
        <section>
          {/* when Board passes down the funcs, how does it update boardData? */}
          {isBoardSelected ? <Board board={selectedBoard} onNewCard={addCard} onDeleteCard={deleteCard}/> : ''}
        </section>
      </main>
    </>
  );
}

export default App
