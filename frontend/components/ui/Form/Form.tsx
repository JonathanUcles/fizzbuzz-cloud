import React from 'react'
import {  useFormik } from 'formik'
import * as yup from 'yup'
import { useGlobalContext } from '../../context/useGlobalContext'
import styles from './Form.module.css'

const Form = () =>{
  
    const { handleResultChange } = useGlobalContext()
    const validationSchema = yup.object({
        inputValue: yup.number().positive().max(10000)    
    })
    const {values, errors, touched ,handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues:{inputValue:0},
        validationSchema: validationSchema,
        
        onSubmit:(values)=>{handleResultChange(values.inputValue)}
        
    })
    
    
    return(
        <div className={styles.root}>

        <form onSubmit={handleSubmit} >
            {errors.inputValue && touched.inputValue ? (<div>{errors.inputValue}</div>):null}
            <input id="inputValue" value={values.inputValue} onChange={handleChange} onBlur={handleBlur} type="number" />
            <button type='submit'>Enter Number</button>
        </form>
   
        </div>
    )
}
export default Form;