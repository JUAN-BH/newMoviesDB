import { createContext, useContext, useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";

const GlobalStateContext = createContext();

const dataInitalState = {
  lang: navigator.language.split("-")[0],
  page: 1,
  initialLoader: true,
  loading: true,
  error: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "STAR_INITIAL_REQUEST":
      return {
        ...state,
        initialLoader: true,
        loading: false,
        error: false,
      };
    case "STAR_REQUEST":
      return {
        ...state,
        initialLoader: false,
        loading: true,
        error: false,
      };
    case "REQUEST__SUCCESS":
      return {
        ...state,
        initialLoader: false,
        loading: false,
        error: false,
      };
    case "REQUEST__FAIILED":
      return {
        ...state,
        initialLoader: false,
        loading: false,
        error: true,
      };
    case "MANAGE_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    case "CHANGE_LANG":
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export function GlobalStateContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, dataInitalState);
  const locationRouter = useLocation();

  useEffect(() => {
    dispatch({ type: "MANAGE_PAGE", payload: 1 });
  }, [locationRouter.pathname]);

  // console.log(state.page);

  const globalState = { state, dispatch };

  return (
    <GlobalStateContext.Provider value={globalState}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export function useGlobalStateContext() {
  const globalState = useContext(GlobalStateContext);
  return globalState;
}
