import { useDispatch } from "react-redux";
import { setModalAddRecipe } from "../../../redux/action";

const AddRecipe = (props) => {

    const dispatch = useDispatch();

    const showModal = () => {
        dispatch(setModalAddRecipe(true));
    }

    return <button className={props.Style} onClick={showModal} >Add Recipe</button>
}

export default AddRecipe;