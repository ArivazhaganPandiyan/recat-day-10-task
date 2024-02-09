import axios from "axios";


const API_URL = "https://mock-api-bdg1.onrender.com/data";

export const getPosts = async () => {
  return await axios.get(API_URL);
};

