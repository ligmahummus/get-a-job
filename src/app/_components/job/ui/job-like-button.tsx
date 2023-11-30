"use client";
import { useState } from "react";
import { useAlert } from "react-alert";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

export default function JobLikeButton() {
  const [liked, setLiked] = useState<boolean>(false);
  const alert = useAlert();

  const toggleLiked = () => {
    if (liked) alert.error("You removed this job from your favorites");
    else alert.success("You added this job to your favorites");
    setLiked((prev) => !prev);
  };

  return (
    <>
      <button onClick={toggleLiked}>
        {liked ? <IoMdHeart /> : <IoIosHeartEmpty />}
      </button>
    </>
  );
}
