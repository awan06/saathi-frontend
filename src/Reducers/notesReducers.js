import {
  GET_NOTES_FAIL,
  GET_NOTES_REQUEST,
  GET_NOTES_SUCCESS,
  GET_NOTE_FAIL,
  GET_NOTE_REQUEST,
  GET_NOTE_SUCCESS,
} from "../Constants/notesConstants";

export const notesReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case GET_NOTES_REQUEST:
      return { loading: true, success: false };
    case GET_NOTES_SUCCESS:
      return { loading: false, success: true, notes: action.payload };
    case GET_NOTES_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const notesDetailsReducer = (state = { notesDetails: {} }, action) => {
  switch (action.type) {
    case GET_NOTE_REQUEST:
      return { loading: true, success: false };
    case GET_NOTE_SUCCESS:
      return { loading: false, success: true, notesDetails: action.payload };
    case GET_NOTE_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};
