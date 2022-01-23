import { useRef } from "react";
import { useDispatch } from "react-redux";
import { searchRecipe } from "../../../redux/action";
import { setLoading } from "../../../redux/action/global";


const SearchRecepi = (props) => {
    const inputRecepi = useRef();
    const dispatch = useDispatch()

    const getRecepi = () => {
        dispatch(setLoading(true));
        dispatch(searchRecipe(inputRecepi.current.value));
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