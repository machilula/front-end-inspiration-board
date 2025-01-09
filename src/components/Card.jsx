import { useState } from "react";
import propTypes from 'prop-types';

export const Card = (props) => {
  const [likeCount, setLikeCount] = useState(props.likes);

  const onLikeClick = () => {
    setLikeCount(likeCount => likeCount + 1);
  };

  return (
    <li>
      <h3>{props.message}</h3>
      <h3>{likeCount}</h3>
      <button onClick={onLikeClick}>💜</button>
      <button onClick={props.onDeleteCard}>Delete</button>
    </li>
  )
};

Card.propTypes = {
  message: propTypes.string.isRequired,
  likes: propTypes.number.isRequired,
  onDeleteCard: propTypes.func.isRequired
};