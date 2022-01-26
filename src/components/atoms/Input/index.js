import { useEffect } from "react";
import useInput from "../../../hooks/useInput";
import { useState } from "react"

const Input = ({label,name,onChange,value,callback}) => {

    

    const {
        enteredValue,
        isValid,
        hasError,
        valueChangeHandler,
        inputBlurhandler,
        reset,
        setEnteredValue
    } = useInput(e => e !== '')

    useEffect(() => {
        // onChangeHandler(value)
        callback(enteredValue)
    },[enteredValue]);

    const onChangeHandler = (event) => {
        valueChangeHandler(event)
        // onChange(enteredValue)
        console.log(value)
    }

    return(
        <div className="mb-2 flex justify-between">
            <label className="text-md" htmlFor={name}>{label}</label>
            <div>
                
                <input className="border-2 focus:outline-none rounded-md" value={value} onChange={valueChangeHandler} onBlur={inputBlurhandler} name={name}/>
                {hasError && <p className="text-red-400 text-sm">Input must not be empty</p>}
            </div>
        </div>
    )
}

export default Input;