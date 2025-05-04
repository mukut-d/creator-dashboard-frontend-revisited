import React from "react";
import { usePosts } from "../../hooks/usePosts";
import FeedCard from "../Feeds/FeedCard";
import NoSavedPosts from "../NotPostSaved";

const Saved = () => {
  const { posts } = usePosts();

  if (posts.length === 0) {
    return <NoSavedPosts />;
  }

  return (
    <div className=" overflow-y-scroll space-y-4">
      {posts?.map((item) => {
        return (
          <FeedCard
            url={item?.url}
            id={item?.id}
            title={item?.title}
            platform={item?.platform}
          />
        );
      })}
    </div>
  );
};

export default Saved;
