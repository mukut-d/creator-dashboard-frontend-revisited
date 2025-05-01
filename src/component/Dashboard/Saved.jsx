import React from "react";
import { usePosts } from "../../hooks/usePosts";
import FeedCard from "../Feeds/FeedCard";

const Saved = () => {
  const { posts } = usePosts();

  return (
    <div className=" overflow-y-scroll space-y-4">
      {posts.length === 0 ? (
        <div className="  items-center justify-center flex h-full ">
          <p className="text-lg font-normal">No posts saved yet</p>
        </div>
      ) : (
        posts?.map((item) => {
          return (
            <FeedCard
              url={item?.url}
              id={item?.id}
              title={item?.title}
              platform={item?.platform}
              // savePosts={savePostsHandler}
              // sharePosts={sharePostsHandler}
              // reportPosts={reportPostsHandler}
            />
          );
        })
      )}
    </div>
  );
};

export default Saved;
