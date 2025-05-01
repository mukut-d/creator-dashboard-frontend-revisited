import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import FeedCard from "../Feeds/FeedCard";
import Spinner from "../utils/Spinner";
import { usePosts } from "../../hooks/usePosts";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const reportPostsToast = (id) => toast.error(`Reported id: ${id}`);
const savePostsToast = () => toast.success(`Posts saved`);
const copyPostsToast = () => toast.success(`Post copied to clipboard`);

const FeedsAgg = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { savePosts } = usePosts();

  const reportPostsHandler = (id) => {
    reportPostsToast(id);
    // make api call to report posts in db
  };

  const savePostsHandler = (id) => {
    savePostsToast();
    const postToSave = posts?.filter((item) => item?.id === id);
    // console.log({ ...postToSave[0] });
    savePosts(postToSave);
    // make api call to save the posts in db
  };

  const sharePostsHandler = (url) => {
    copyPostsToast();
    // set item to localstorage
  };

  const fetchFeeds = async () => {
    setIsLoading(true);
    const reddit = await axios.get(
      "https://www.reddit.com/r/technology/top.json?limit=10"
    );
    setIsLoading(false);

    // console.log("reddit " + JSON.stringify(reddit, null, 2));

    const data = reddit?.data?.data?.children?.map((posts) => {
      return {
        id: posts?.data.id,
        title: posts?.data.title,
        url: `https://reddit.com${posts.data.permalink}`,
        saved: false,
        platform: "Reddit",
      };
    });

    setIsLoading(true);
    const news = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${NEWS_API_KEY}`
    );
    setIsLoading(false);

    //  console.log("news " + JSON.stringify(news, null, 2));
    let idx = 0;
    const newsData = news.data.articles?.slice(0, 10).map((news) => {
      idx++;
      return {
        id: idx,
        title: news?.title,
        url: news.url,
        saved: false,
        platform: "Hacker News",
      };
    });

    //  console.log("newdata " + JSON.stringify(newsData, null, 2));

    setPosts([...data, ...newsData]);
  };

  useEffect(() => {
    fetchFeeds();
  }, []);

  // console.log(" posts " + JSON.stringify(posts, null));

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="  overflow-y-scroll space-y-4">
      {posts?.map((item) => {
        return (
          <FeedCard
            url={item?.url}
            id={item?.id}
            title={item?.title}
            platform={item?.platform}
            savePosts={savePostsHandler}
            sharePosts={sharePostsHandler}
            reportPosts={reportPostsHandler}
          />
        );
      })}
      <Toaster />
    </div>
  );
};

export default FeedsAgg;
