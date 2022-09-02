import {Actions ,State} from './types'
export const GlobalReducer = (state:State, action:Actions) =>{
    switch(action.type){
        case 'SET_RESULT':
            return {
                ...state,
                fizzbuzz: {
                    isMounted: action.payload.isMounted,
                    loading:action.payload.loading,
                    result:action.payload.result,
                    errorMSG:action.payload.errorMSG
                }
               
            }
        default:
            return state
    
    }

    
}