import React from 'react'
import { useGlobalContext } from '../../context/useGlobalContext'
import styles from './ResultDisplay.module.css'
const ResultDisplay = () =>{
    const { fizzbuzz } = useGlobalContext()
    const { isMounted ,loading, result, errorMSG} = fizzbuzz
    if(loading){
        return(
            <div>loading ...</div>
        )
    }
    return(
        <>
        {isMounted &&
        <div className={styles.root}>
            <p>{result}</p>
            <p>{errorMSG}</p>
      
        </div>}
        </>
        
    )
}
export default ResultDisplay;