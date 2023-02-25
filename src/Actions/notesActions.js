import {
  GET_NOTES_FAIL,
  GET_NOTES_REQUEST,
  GET_NOTES_SUCCESS,
} from "../Constants/notesConstants";
import axios from "axios";

export const getNotes =
  (subject = "", course = "", semester) =>
    async (dispatch) => {
      try {
        dispatch({ type: GET_NOTES_REQUEST });
        let url = `https://study-saathi.onrender.com/api/books?type=Notes&subject=${subject}&course=${course}`;
        const res = await axios.get(url);
        console.log(res);
        dispatch({ type: GET_NOTES_SUCCESS, payload: res.data.data });
      } catch (err) {
        dispatch({ type: GET_NOTES_FAIL, payload: err });
      }
    };
