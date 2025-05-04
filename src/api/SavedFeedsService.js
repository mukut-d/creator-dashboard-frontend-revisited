const BASE_URL = "http://localhost:8000/api";

export const savedPost = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts/saved`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postObj),
    });
    if (!response.ok) throw new Error("Failed to save Posts");

    return await response.json();
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getPosts = async (userId) => {
  try {
    const ress = await fetch(`${BASE_URL}/posts/${userId}`);

    const data = ress.json();

    if (!ress.ok) {
      throw new Error("Failed to get saved posts");
    }

    return data;
  } catch (e) {
    console.log(e.message);
  }
};
