import useInput from "../../../hooks/useInput";

const Input = ({label,name,onChange}) => {


    const {
        enteredValue,
        isValid,
        hasError,
        valueChangeHandler,
        inputBlurhandler,
        reset,
    } = useInput(e => e !== '')

    const onChangeHandler = (event) => {
        valueChangeHandler(event)
        onChange(event.target.value)
        // console.log(value)
    }


    return(
        <div className="mb-2 flex justify-between">
            <label className="text-md" htmlFor={name}>{label}</label>
            <div>
                <input id={name}  className="border-2 focus:outline-none rounded-md" value={enteredValue} onChange={onChangeHandler} onBlur={inputBlurhandler} name={name}/>
                {hasError && <p className="text-red-400 text-sm">Input must not be empty</p>}
            </div>
        </div>
    )
}

export default Input;