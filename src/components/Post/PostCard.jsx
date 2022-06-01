import React from "react";
import "./Post.css";
const PostCard = ({ title, desc, thumbnail }) => {
  return (
    <div className='postCard'>
      <div className='post__thumbnail'>
        <img src={thumbnail} alt='post' />
      </div>
      <div className='post__details'>
        <h3 className='post__title'>{title}</h3>
        <p className='post__description'>{desc}</p>
      </div>
    </div>
  );
};

export default PostCard;