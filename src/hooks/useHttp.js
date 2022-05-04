import { useReducer, useCallback } from "react";

function httpReducer(state, action) {
  //State to store data based on the type
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      status: "pending",
    };
  } else if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      error: null,
      status: "completed",
    };
  } else if (action.type === "ERROR") {
    return {
      data: null,
      error: action.responseError,
      status: "completed",
    };
  }

  return state;
}

//custom hook for fetching data from api
function useHttp(requestFunction, startWithPending = false) {
  //initual request will be pending
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async function (requestData) {
      dispatch({ type: "SEND" });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: "SUCCESS", responseData });
      } catch (error) {
        dispatch({
          type: "ERROR",
          errorMessage: error.message || "Something went wrong!",
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
