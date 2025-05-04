import { getAuthHeaders } from "./AuthService";

const BASE_URL = "http://localhost:8000/api";

export const savedPost = async (postObj) => {
  // console.log("postObj " + JSON.stringify(postObj, null, 2));
  try {
    const response = await fetch(`${BASE_URL}/posts/saved`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(postObj),
    });
    if (!response.ok) throw new Error("Failed to save Posts");

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getPosts = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${userId}`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    const data = response.json();

    if (!response.ok) {
      throw new Error("Failed to get saved posts");
    }

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
