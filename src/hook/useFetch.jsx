import { useEffect, useReducer, useState } from "react";
const changeState = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_ISPENDING":
      return { ...state, isPending: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
export function useFetch(url) {
  const [state, dispatch] = useReducer(changeState, {
    data: null,
    error: null,
    isPending: false,
  });
  // const [data, setData] = useState(null)
  // const [error, setError] = useState(null)
  // const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    const getData = async () => {
      dispatch({ type: "SET_ISPENDING", payload: true });
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error("Something went wrong :(");
        }
        const data = await req.json();

        dispatch({ type: "SET_DATA", payload: data });
        dispatch({ type: "SET_ISPENDING", payload: false });
        dispatch({ type: "SET_ERROR", payload: null });
      } catch (error) {
        dispatch({ type: "SET_ISPENDING", payload: false });
        dispatch({ type: "SET_ERROR", payload: error.massage });
        console.log(error.massage);
      }
    };
    getData();
  }, [url]);

  return { ...state };
}
