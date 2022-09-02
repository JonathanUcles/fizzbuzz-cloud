import { useState, ChangeEvent } from 'react'
import { FormikValues, useFormik } from 'formik'
import * as yup from 'yup'
import { useGlobalContext } from '../../context/useGlobalContext'
import styles from './Form.module.css'

const Form = () =>{
  
    const { handleResultChange } = useGlobalContext()
    const validationSchema = yup.object({
        inputValue: yup.number().positive()    
    })
    const {values, errors, touched ,handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues:{inputValue:0},
        validationSchema: validationSchema,
        
        onSubmit:(values)=>{handleResultChange(values.inputValue)}
        
    })
    
    
    return(
        <>

        <form onSubmit={handleSubmit} className={styles.root}>
            {errors.inputValue && touched.inputValue ? (<div>{errors.inputValue}</div>):null}
            <input id="inputValue" value={values.inputValue} onChange={handleChange} onBlur={handleBlur} type="number" />
            <button type='submit'>Enter Number</button>
        </form>
        </>
    )
}
export default Form;