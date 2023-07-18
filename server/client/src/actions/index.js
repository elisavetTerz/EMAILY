//we use axios to make ajax requests
import axios from "axios";
import { FETCH_USER } from "./types";

// export const fetchUser = () => {
//   return function (dispatch) {
//     console.log("[fetchUser] action called");
//     axios
//       .get("/api/current_user")
//       .then((res) => dispatch({ type: FETCH_USER, payload: res }));
//   };
// };

//refactor the function
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};
