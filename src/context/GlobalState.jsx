import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();

function dataFromLocalStorage() {
  return (
    JSON.parse(localStorage.getItem("unsplashData")) || {
      mode: "light",
      likedImages: [],
      user: null,
    }
  );
}

const changeState = (state, action) => {
  switch (action.type) {
    case "ADD_LIKES_IMAGE":
      return { ...state, likedImages: [...state.likedImages, action.paylaod] };
      case "CHANGE_MODE":
        return { ...state, mode: action.paylaod }
        case "ADD_USER":
          return { ...state, user: action.paylaod }
    default:
      return state;
  }
};
export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, dataFromLocalStorage());

  const addNewImage = (newImage) => {
    const isImageAlreadyAdded = state.likedImages.every((image) => {
      return image.id !== newImage.id;
    });
    if (isImageAlreadyAdded) {
      dispatch({ type: "ADD_LIKES_IMAGE", paylaod: newImage });
    }
  };

  const changeMode = (mode) => {
    dispatch({type: "CHANGE_MODE", paylaod: mode})
  }

  const addUser = (user) =>  {
    dispatch({type: 'ADD_USER', paylaod: user})
  }

  useEffect(() => {
    localStorage.setItem("unsplashData", JSON.stringify(state));
  }, [state]);
  useEffect(() => {
    if(state.mode === 'dark')  document.body.classList.add('dark-mode')
   else  document.body.classList.remove('dark-mode')
    }, [state.mode])

  return (
    <GlobalContext.Provider value={{ ...state, addNewImage, changeMode, addUser}}>
      {children}
    </GlobalContext.Provider>
  );
}
