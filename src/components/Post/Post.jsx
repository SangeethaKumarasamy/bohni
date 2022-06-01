import React, { useEffect } from "react";
import "./Post.css";
import PostCard from "./PostCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../reducer/postSlice";
import Loading from "../Loading/Loading";

const Post = () => {
  const posts = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div className='posts'>
      <div className='post'>
        {posts.status ? (
          posts.posts?.map((post) => (
            <PostCard
              thumbnail={post.snippet.thumbnails.high.url}
              title={post.snippet.title}
              desc={post.snippet.description}
              key={post.etag}
            />
          ))
        ) : (
          <Loading />
        )}

      </div>
    </div>
  );
};

export default Post;