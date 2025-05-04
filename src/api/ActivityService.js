import { getAuthHeaders } from "./AuthService";

// const BASE_URL = "http://localhost:8000/api";
const BASE_URL = `${import.meta.env.VITE_API_URL}/api`;

export const getActivity = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/activity/${userId}`, {
      headers: getAuthHeaders(),
    });

    const result = await response.json();

    if (!result.ok) throw new Error("Failed to get recent activity");

    return result?.activities;
  } catch (error) {
    console.log(error.message);
  }
};

export const saveActivity = async (activityObj) => {
  try {
    const response = await fetch(`${BASE_URL}/activity/saved`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(activityObj),
    });

    const result = await response.json();
    console.log(
      "result from save activity  service" + JSON.stringify(result, null, 2)
    );

    if (!result.ok) throw new Error("Failed to get recent activity");

    return result;
  } catch (error) {
    console.log(error.message);
  }
};
