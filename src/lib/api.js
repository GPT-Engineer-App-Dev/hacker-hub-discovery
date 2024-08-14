import axios from 'axios';

export const fetchTopStories = async (searchQuery) => {
  const response = await axios.get(
    `https://hn.algolia.com/api/v1/search?query=${searchQuery}&tags=story`
  );
  return response.data;
};