import { useState } from "react";

export const Card = (props) => {
  const [likeCount, setLikeCount] = useState(props.likes);

  const onLikeClick = () => {
    setLikeCount(likeCount + 1);
  };


  return (
    <li>
      <h3>{props.message}</h3>
      <h3>{props.likes}</h3>
      <button onClick={onLikeClick}>💜</button>
    </li>
  )
};