import { useContext , useCallback} from 'react'
import {GlobalContext } from './GlobalContext'

export const useGlobalContext =  () =>{
    const {state,dispatch} = useContext(GlobalContext)
    const {  fizzbuzz } = state;
   
    
    const handleResultChange = useCallback(
        async (value:number) =>{
            dispatch({type:"SET_RESULT", payload:{loading:true,  isMounted:true ,result:"", errorMSG:""}})
            try{
                /* Put Production URL Here rather than just hardcode url can use 
                .env for production and dev urls 
                */
                const resp = await fetch(`http://localhost:8080?v=${value}`)
                const body = await resp.json()
                const { result , errorMSG } = body;
                //console.log(body)
                dispatch({type:"SET_RESULT", payload:{loading:false,  isMounted:true ,result:result, errorMSG:errorMSG}})

            }catch(error){
                dispatch({type:"SET_RESULT", payload:{loading:false, isMounted:true ,result:"", errorMSG:"Request Failed"}})


            }
        },
      []
    )
    
    return {
        fizzbuzz,
        handleResultChange

    }
}