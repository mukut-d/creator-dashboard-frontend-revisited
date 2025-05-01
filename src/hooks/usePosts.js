import { useContext } from "react";
import { PostContext } from "../store/postsStore";

export const usePosts = () => useContext(PostContext);
