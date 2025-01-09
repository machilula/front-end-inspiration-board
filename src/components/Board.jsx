import { CardList } from './CardList';
import propTypes from 'prop-types';

export const Board = ({ board, onDeleteCard }) => {
  
  return (
    <div>
      <section className='Board'>
        <CardList cards={board.cards} onDeleteCard={onDeleteCard}/>
      </section>
    </div>

  )
};

Board.propTypes = {
  board: propTypes.shape({
    title: propTypes.string.isRequired,
    creator: propTypes.string.isRequired,
    cards: propTypes.array.isRequired
  }).isRequired,
  onDeleteCard: propTypes.func.isRequired
};
