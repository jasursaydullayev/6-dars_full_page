import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext()

function dataFromLocalStorage() {
    return JSON.parse(localStorage.getItem('unsplashData')) || {
        mode: 'light',
        likedImages: []
    }
}

const changeState = (state, action) => {
    switch (action.type) {
        case 'ADD_LIKES_IMAGE':
            return {...state, likedImages: [ ...state.likedImages, action.paylaod ]}
            default:
                return state        
        }

}
export function GlobalContextProvider({children}) {
    const [state, dispatch] = useReducer(changeState, dataFromLocalStorage())


    const addNewImage = (newImage) => {
        const isImageAlreadyAdded = state.likedImages.every((image) => {
            return image.id !== newImage.id
        })
        if(isImageAlreadyAdded) {
            dispatch({type: 'ADD_LIKES_IMAGE', paylaod: newImage})
        }
    }
    useEffect(() => {
        localStorage.setItem('unsplashData', JSON.stringify(state))
    }, [state])

    return <GlobalContext.Provider value={{ ...state, addNewImage }}>
    {children}
    </GlobalContext.Provider>
}