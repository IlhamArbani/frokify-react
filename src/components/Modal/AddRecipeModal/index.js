import React from "react";
import ReactDom from 'react-dom';
import { useDispatch } from "react-redux";
import { setModalAddRecipe } from "../../../redux/action";

const AddRecipeModal = (props) => {

    const dispatch = useDispatch();

    const BackDrop = () => {
        return <div onClick={() => dispatch(setModalAddRecipe(false))} className="z-10 blur-2xl bg-backdrop w-full top-0 left-0 h-screen min-h-screen fixed"></div>
    }

    const ModalOverlay = () => {
        return (
            <div className="flex justify-center">
                <div className="bg-white px-12 top-12 rounded-md fixed w-9/12 h-5/6 z-30 flex flex-col justify-center">{props.children}</div>
            </div>
        )
    }

    return(
        <React.Fragment>
            {
                ReactDom.createPortal(<BackDrop/>,document.getElementById('backdrop-root'))
            }
            {
                ReactDom.createPortal(<ModalOverlay/>,document.getElementById('overlay-root'))
            }
        </React.Fragment>
    )
}

export default AddRecipeModal;