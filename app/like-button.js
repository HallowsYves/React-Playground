'use client'

// "use client" makes it a client compoenent
import { useState } from "react";
export default function LikeButton() {
    const [likes, setLikes] = useState(0);
    function handleClick() {
        setLikes(likes + 1);
      }

      return <button onClick={handleClick}>Like({likes})</button>
}