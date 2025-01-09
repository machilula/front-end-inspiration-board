import { useState } from 'react';
import { useEffect } from 'react';
import { BoardsList } from './components/BoardsList';
import { NewBoardForm } from './components/NewBoardForm';
import { Board } from './components/Board';
import { NewCardForm } from "./components/NewCardForm";
import { getAllBoards, addNewBoard, getBoardById } from './httpRequests/boardRequests';
import './App.css';

const convertBoardFromApi = (apiBoard) => {
  const newBoard = {
    id: apiBoard.id,
    creator: apiBoard.owner,
    title: apiBoard.title,
    cards: apiBoard.cards ? apiBoard.cards : []
  };

  return newBoard;
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
    const apiBoard = {"title": newBoard.title, "owner": newBoard.creator};

    addNewBoard(apiBoard)
      .then(response => console.log(response))
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

  const headerTitle = isBoardSelected ? `INSPIRATION FOR ${selectedBoard.title}`: 'CHOOSE OR CREATE BOARD!';
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
    <div className='App'>
      <header>
        <h1>{headerTitle.toUpperCase()}</h1>
        <h2>{isBoardSelected && `Created by ${selectedBoard.creator}`}</h2>
      </header>
      <main>
        <section className='left-panel'>
          {/* do the functions being passed down to board  */}
          <BoardsList boards={boardData} onSelectBoard={selectBoard} />
          <NewBoardForm onAddBoard={addBoard}/>
          {isBoardSelected && <NewCardForm  onNewCard={addCard}/> }
        </section>
        <section className='cards-container'>
          {/* when Board passes down the funcs, how does it update boardData? */}
          {isBoardSelected ? <Board board={selectedBoard} onDeleteCard={deleteCard}/> : ''}
        </section> 
      </main>
    </div>
  );
}

export default App
