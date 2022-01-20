import { useRef } from "react";
import Axios from 'axios';

const SearchRecepi = (props) => {
    const inputRecepi = useRef();

    const getRecepi = () => {
        Axios.get(`https://forkify-api.herokuapp.com/api/search?q=${inputRecepi.current.value}`)
        .then(e => {
            console.log(e);
            props.parentCallback(e.data.recipes);
        })
        .catch(e => {
            console.log(e);
        })
    }

    return (
        <div>
            <input ref={inputRecepi} className="rounded-full focus:outline-none px-3 py-2 w-96 h-9"/>
            <button className="-ml-20 h-9 rounded-full text-xl bg-gradient-to-r text-white from-orange-200 to-orange-400 w-40" onClick={getRecepi}>
                Search
            </button>
        </div>
    )
}

export default SearchRecepi;