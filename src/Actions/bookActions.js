import {
  GET_BOOKS_FAIL,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOK_FAIL,
  GET_BOOK_REQUEST,
  GET_BOOK_SUCCESS,
} from "../Constants/booksConstants";
import axios from "axios";
export const getBooks = (title) => async (dispatch) => {
  try {
    dispatch({ type: GET_BOOKS_REQUEST });
    let url = `https://study-saathi.onrender.com/api/books?type=Book`;
    if (title?.trim().length > 0) {
      url = `https://study-saathi.onrender.com/api/books?type=Book&title=${title}`;
    }
    const res = await axios.get(url);
    console.log(res);
    dispatch({ type: GET_BOOKS_SUCCESS, payload: res.data.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_BOOKS_FAIL, payload: err });
  }
};

export const getBookById = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_BOOK_REQUEST });
    let url = `https://study-saathi.onrender.com/api/books/${id}`;
    const res = await axios.get(url);
    console.log(res);
    dispatch({ type: GET_BOOK_SUCCESS, payload: res.data.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_BOOK_FAIL, payload: err });
  }
};
