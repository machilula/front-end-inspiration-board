import { useState } from 'react';
import { useEffect } from 'react';
import { BoardsList } from './components/BoardsList';
import { NewBoardForm } from './components/NewBoardForm';
import { Board } from './components/Board';
import { getAllBoards, addNewBoard, getBoardById, addNewCard} from './httpRequests/boardRequests';
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

const convertBoardFromApi = (apiBoard) => {
  const newBoard = {
    id: apiBoard.id,
    creator: apiBoard.owner,
    title: apiBoard.title,
    cards: apiBoard.cards ? apiBoard.cards : []
  };

  return newBoard;
};

const convertCardFromApi = (apiCard) => {
  const newCard = {
    id: apiCard.id,
    message: apiCard.message,
    likes: 0
  };
  return newCard
};

function App() {
  const [boardData, setBoardData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({});
  const [isBoardSelected, setIsBoardSelected] = useState(false);

  useEffect(() => {
    getAllBoards()
    .then( apiBoards => {
      const boards = apiBoards.map(convertBoardFromApi);
      setBoardData(boards);
    })
    .catch(error => console.log(`couldn't update board data: ${error}`))
  }, []);


  const addBoard = (newBoard) => {
    console.log(newBoard)
    const apiBoard = {"title": newBoard.title, "owner": newBoard.creator};

    addNewBoard(apiBoard)
      // .then(response => console.log(response.board))
      .then(response => {
        console.log(response.board)
        setBoardData(prevBoards => [convertBoardFromApi(response.board), ...prevBoards])
      })
      .catch(error => console.log(`Couldn't add board: ${error}`));
  };
  

  const selectBoard = (boardId) => {
    if (!boardId) {
      setSelectedBoard({});
      setIsBoardSelected(false);
      return;
    }

    getBoardById(boardId)
      .then((apiBoard) => {
        const boardObj = convertBoardFromApi(apiBoard);
        setSelectedBoard(boardObj);
        setIsBoardSelected(true);
      })
      .catch(error => console.log(`Could not select board: ${error}`));
  };

  const currentBoardTitle =  `${selectedBoard.title} by ${selectedBoard.creator}`; 

  //  addCard does not render a new card. WIP
  const addCard = (newCard) => {
    // console.log(newCard)
    console.log(selectedBoard)
    const apiCard = {"message": newCard.message, "like_count": 0}

    addNewCard(selectedBoard.id, apiCard)
    .then(response => {
      console.log(response)
      setBoardData((boardData) => boardData.map(board => {
        if (board.id === selectedBoard.id) {
          return {...board, cards: [...board.cards, convertCardFromApi(response.card)]};
        } else return board;
      }));
    })
    .catch(error => console.log(`Could not add card: ${error}`));
    selectBoard(selectedBoard.id);
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
          <NewBoardForm onAddBoard={addBoard}/>
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
