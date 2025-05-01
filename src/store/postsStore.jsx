import { createContext, useState } from "react";

export const PostContext = createContext({
  posts: [],
  savePosts: () => {},
});

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const savePostsHandler = (postObj) => {
    setPosts((prev) => [...prev, ...postObj]);
  };

  console.log("posts in context " + JSON.stringify(posts, null, 2));

  const ctxValues = {
    posts: posts,
    savePosts: savePostsHandler,
  };
  return (
    <PostContext.Provider value={ctxValues}>{children}</PostContext.Provider>
  );
};

export default PostProvider;
