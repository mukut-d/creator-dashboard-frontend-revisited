import { createContext, useState } from "react";
import { getActivity, saveActivity } from "../api/ActivityService";
import {
  earnCredits,
  getAllCredits,
  getCredits,
  updateCredits,
} from "../api/CreditsService";
import { getPosts, savedPost } from "../api/SavedFeedsService";

export const PostContext = createContext({
  posts: [],
  recent: [],
  credits: [],
  savePosts: () => {},
  getSavedPosts: () => {},
  saveActivity: () => {},
  getActivity: () => {},
  updateCredits: () => {},
  earnCredis: () => {},
  getCredits: () => {},
  getAllUserCredits: () => {},
});

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [recent, setRecent] = useState([]);
  const [credits, setCredits] = useState([]);

  const getSavedPostsHandler = async (userId) => {
    // make api call here to get saved posts
    const response = await getPosts(userId);

    setPosts((prev) => [...prev, response?.posts]);
  };

  const savePostsHandler = async (postObj) => {
    // make api call to save posts
    // console.log("post obj from context " + JSON.stringify(postObj, null, 2));

    const response = await savedPost({
      postId: postObj?._id,
      title: postObj?.title,
      url: postObj?.url,
      saved: postObj?.saved,
      platform: postObj?.platform,
    });

    getSavedPostsHandler(response?.userId);
  };

  const saveActivityHandler = async (activityObj) => {
    // make api call to save recent activity

    const data = await saveActivity(activityObj);

    getActivityHandler(data?.userId);
  };

  const getActivityHandler = async (userId) => {
    const data = await getActivity(userId);
    setRecent((prev) => {
      return [...prev, ...data];
    });
  };

  // Credits Hanlders

  // Admin
  const updateCreditsHandler = async (creditObj) => {
    const response = await updateCredits(creditObj);

    localStorage.setItem({ credits: response?.user?.credits });
  };

  const getAllUserCreditsHandler = async () => {
    const response = await getAllCredits();
    console.log(
      "response from all usercredits " + JSON.stringify(response, null, 2)
    );
    if (response?.ok) {
      setCredits((prev) => {
        return [...prev, ...response?.users];
      });
    }
  };

  // Users
  const getCreditsHandler = async () => {
    const response = await getCredits();

    localStorage.setItem({ credits: response?.credits });
  };

  const earnCreditsHandler = async (action) => {
    const response = await earnCredits(action);
  };

  // console.log("recent " + JSON.stringify(recent, null, 2));
  // console.log("credits " + JSON.stringify(credits, null, 2));

  const ctxValues = {
    posts: posts,
    recent: recent,
    credits: credits,
    savePosts: savePostsHandler,
    getSavedPosts: getSavedPostsHandler,
    saveActivity: saveActivityHandler,
    getActivity: getActivityHandler,
    updateCredits: updateCreditsHandler,
    earnCredis: earnCreditsHandler,
    getCredits: getCreditsHandler,
    getAllUserCredits: getAllUserCreditsHandler,
  };
  return (
    <PostContext.Provider value={ctxValues}>{children}</PostContext.Provider>
  );
};

export default PostProvider;
