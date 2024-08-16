import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/posts';


export const fetchProducts = async (page: number, limit: number) => {
    const response = await axios.get(API_URL, {
      params: {
        page: page,
        limit: limit,
      },
    });
    return response.data;
  };

export const fetchProductById = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  console.log(response.data)
  return response.data;
};
