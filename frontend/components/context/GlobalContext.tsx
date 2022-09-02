import { createContext , useReducer, ReactNode, Dispatch} from 'react'
import { GlobalReducer } from './GlobalReducer'
import {State, Actions} from './types'
const defaultState = {
    fizzbuzz:{
        loading:false,
        result:"",
        errorMSG:""
    }
}
export const GlobalContext = createContext<{state:State; dispatch:Dispatch<Actions>}>({ state: defaultState, dispatch: () => null })
type Props = {
    children:ReactNode

}
export const GlobalContextProvider = ({children}:Props) =>{
    const [state, dispatch] = useReducer(GlobalReducer,defaultState)

    return(
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>

    )
}
