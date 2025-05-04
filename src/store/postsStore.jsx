import { createContext, useState } from "react";

export const PostContext = createContext({
  posts: [],
  recent: [],
  savePosts: () => {},
  saveActivity: () => {},
  getSavedPosts: () => {},
});

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [recent, setRecent] = useState([]);

  const savePostsHandler = (postObj) => {
    // make api call to save posts

    setPosts((prev) => [...prev, ...postObj]);
  };

  const activityHandler = (activityObj) => {
    // make api call to save recent activity

    // console.log("activity " + JSON.stringify(activityObj, null, 2));
    setRecent((prev) => {
      return [...prev, { ...activityObj }];
    });
  };

  const getSavedPostsHandler = (userId) => {
    // make api call here to get saved posts
  };

  console.log("posts in context " + JSON.stringify(posts, null, 2));

  const ctxValues = {
    posts: posts,
    recent: recent,
    savePosts: savePostsHandler,
    saveActivity: activityHandler,
    getSavedPosts: getSavedPostsHandler,
  };
  return (
    <PostContext.Provider value={ctxValues}>{children}</PostContext.Provider>
  );
};

export default PostProvider;
