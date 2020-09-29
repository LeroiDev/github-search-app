import React, { useReducer } from "react";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../Types";

const AlertState = (props) => {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // handle alert popup for empty search api error
  const setAlertHandler = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });
    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
      });
    }, 2000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        setAlertHandler,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
