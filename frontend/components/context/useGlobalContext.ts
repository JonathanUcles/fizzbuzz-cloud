import { useContext , useCallback} from 'react'
import {GlobalContext } from './GlobalContext'

export const useGlobalContext =  () =>{
    const {state,dispatch} = useContext(GlobalContext)
    const {  fizzbuzz } = state;
   
    
    const handleResultChange = useCallback(
        async (value:number) =>{
            dispatch({type:"SET_RESULT", payload:{loading:true ,result:"", errorMSG:""}})
            try{
                const resp = await fetch(`http://localhost:8080?v=${value}`)
                const body = await resp.json()
                const { result , errorMSG } = body;
                console.log(body)
                dispatch({type:"SET_RESULT", payload:{loading:false ,result:result, errorMSG:errorMSG}})

            }catch(error){
                dispatch({type:"SET_RESULT", payload:{loading:false ,result:"", errorMSG:"Request Failed"}})


            }
        },
      []
    )
    
    return {
        fizzbuzz,
        handleResultChange

    }
}