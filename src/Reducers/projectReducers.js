import {
  GET_BOOKS_FAIL,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOK_FAIL,
  GET_BOOK_REQUEST,
  GET_BOOK_SUCCESS,
} from "../Constants/booksConstants";

export const booksReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case GET_BOOKS_REQUEST:
      return { loading: true, success: false };
    case GET_BOOKS_SUCCESS:
      return { loading: false, success: true, books: action.payload };
    case GET_BOOKS_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const bookDetailsReducer = (state = { bookDetails: {} }, action) => {
  switch (action.type) {
    case GET_BOOK_REQUEST:
      return { loading: true, success: false };
    case GET_BOOK_SUCCESS:
      return { loading: false, success: true, bookDetails: action.payload };
    case GET_BOOK_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};
