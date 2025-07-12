import axios from "axios";

const BASE_URL = "http://localhost:8080/books"; // Change if needed

export const getBooks = () => axios.get(BASE_URL);
export const getBook = (id) => axios.get(`${BASE_URL}/${id}`);
export const addBook = (book) => axios.post(BASE_URL, book);
export const deleteBook = (id) => axios.delete(`${BASE_URL}/${id}`);
export const updateAvailability = (id, available) =>
  axios.patch(`${BASE_URL}/${id}`, { available });
