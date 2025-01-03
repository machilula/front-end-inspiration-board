import { useState } from "react";

export const Card = (props) => {
  const [likeCount, setLikeCount] = useState(0);

  const onLikeClick = () => {
    setLikeCount(likeCount => likeCount + 1);
  };

  return (
    <li>
      <h3>{props.message}</h3>
      <h3>{likeCount}</h3>
      <button onClick={onLikeClick}>💜</button>
    </li>
  )
};