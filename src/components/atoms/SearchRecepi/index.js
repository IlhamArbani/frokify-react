import { useRef } from "react";
import Axios from 'axios';

const SearchRecepi = () => {
    const inputRecepi = useRef();

    const getRecepi = () => {
        Axios.get('https://forkify-api.herokuapp.com/api/search?q=pizza')
        .then(e => {
            console.log(e);
        })
        .catch(e => {
            console.log(e);
        })
    }

    return (
        <div>
            <input ref={inputRecepi} className="rounded-lg"/>
            <button onClick={getRecepi}>Search</button>
        </div>
    )
}

export default SearchRecepi;