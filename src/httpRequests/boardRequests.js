import axios from "axios";

const kbaseURL = "localhost://5000";


// on initial render and once user adds a new board
// get a list of boards to display to user
export const getAllBoards = () => {
    const response = axios.get(`${kbaseURL}/boards`)
    .then( response => response.data)
    .catch( error => console.log(`Couldn't fetch all boards: ${error}`));

    return response;
};

// when user submits a new board form, new board should be created
export const addNewBoard = () => {
    const response = axios.post(`${kbaseURL}/boards`)
    .then( response => response.data)
    .catch( error => console.log(`Couldn't fetch all boards: ${error}`));

    return response;
};

// when user selects a board, get board by id


// when user selects board and after user adds new card, get all cards with board id


// when user adds new card, send post request to add new card


// when user clicks like on a card, send patch request to increase card like count


// when user clicks delete on a card, send delete request to remove card
