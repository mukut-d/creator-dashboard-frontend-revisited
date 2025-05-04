import { getAuthHeaders } from "./AuthService";

const BASE_URL = "http://localhost:8000/api/credits";

// User Apis

export const earnCredits = async (actions) => {
  try {
    const response = await fetch(`${BASE_URL}/credits/earn`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify({ ...actions }),
    });
    if (!response.ok) throw new Error("Failed to save credits");

    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
};

export const getCredits = async () => {
  try {
    const response = await fetch(`${BASE_URL}/credits`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    const data = response.json();

    if (!response.ok) {
      throw new Error("Failed to get credits");
    }

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

// Admin Apis
export const getAllCredits = async () => {
  try {
    const response = await fetch(`${BASE_URL}/admin/credits`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    const data = response.json();

    if (!response.ok) {
      throw new Error("Failed to get all user credits");
    }

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCredits = async (creditsObj) => {
  console.log("credit obj " + JSON.stringify(creditsObj, null, 2));

  try {
    const response = await fetch(
      `${BASE_URL}/admin/credits/${creditsObj?.userId}`,
      {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({ ...creditsObj?.credits }),
      }
    );
    if (!response.ok) throw new Error("Failed to update credits");

    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
};
