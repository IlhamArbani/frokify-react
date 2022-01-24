const Input = ({label,name}) => {
    return(
        <div className="mb-2 flex justify-between">
            <label className="text-md" htmlFor={name}>{label}</label>
            <input className="border-2 focus:outline-none rounded-md" name={name}/>
        </div>
    )
}

export default Input;