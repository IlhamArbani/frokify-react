import { AddRecipeModal } from "../.."
import { useRef,useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addRecipe } from "../../../redux/action";
import useInput from "../../../hooks/useInput";



const AddRecipeFormTest = () => {
    const recipe = useSelector(state => state.dashboardReducer.myRecipe)
    const dispatch = useDispatch();
    const [urlState, setStateUrl] = useState()

    let url;

    
    const parentCallback = (e) => {
        url = e;
    }
    
    // let url = parentCallback()
    const {
        enteredValue:enteredTitle,
        isValid,
        hasError,
        valueChangeHandler,
        inputBlurhandler,
        reset
    } = useInput(e => e !== '')


    const title = useRef();
    // const url = useRef();
    const image_url = useRef();
    const publisher = useRef();
    const prep_time = useRef();
    const servings = useRef();

    const ingridient_1 = useRef()
    const ingridient_2 = useRef()
    const ingridient_3 = useRef()
    const ingridient_4 = useRef()
    const ingridient_5 = useRef()
    const ingridient_6 = useRef()

    const formHandler = (event) => {
        event.preventDefault()
        const data = {
            title:enteredTitle,
            url:url,
            image_url:image_url.current.value,
            publisher:publisher.current.value,
            prep_time:prep_time.current.value,
            servings:servings.current.value,
            ingridient:[ingridient_1.current.value,ingridient_2.current.value,ingridient_3.current.value,ingridient_4.current.value,ingridient_5.current.value,ingridient_6.current.value]
        } 

        console.log(data);

        dispatch(addRecipe(data));

        console.log(recipe);

    }

    // const Input = ({a,b,c}) => {
    //     return(
    //         <div className="mb-2 flex justify-between">
    //             <label className="text-md" htmlFor='title'>Title</label>
    //             <div>
    //                 {enteredValue}
    //                     <input key="dsaffs" className="border-2 focus:outline-none rounded-md" value={a} onChange={b} onBlur={c} name="title"/>
    //                     {hasError && <p className="text-red-400 text-sm">Input must not be empty</p>}
    //             </div>
    //         </div>
    //     )
    // }



    return(
        <AddRecipeModal>
            <form onSubmit={formHandler}>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                    <h1 className="mb-3 text-3xl font-bold">Data Recipe</h1>
                        <div className="mb-2 flex justify-between">
                            <label className="text-md" htmlFor='title'>Title</label>
                            <div>
                                {enteredTitle}
                                <input id="title" type="text" className="border-2 focus:outline-none rounded-md" value={enteredTitle} onChange={valueChangeHandler} onBlur={inputBlurhandler} name="title"/>
                                {hasError && <p className="text-red-400 text-sm">Input must not be empty</p>}
                            </div>
                        </div>

                        {/* <Input b={valueChangeHandler} c={inputBlurhandler} a={enteredValue}/> */}
                        {urlState}
                        {/* <Input key="url" label='URL' name='url' onChange={setStateUrl} callback={parentCallback} value={urlState}/> */}
                        
                        <div className="mb-2 flex justify-between">
                            <label className="text-md" htmlFor='image_url'>Image URL</label>
                            <div>
                                <input className="border-2 focus:outline-none rounded-md" ref={image_url} name="image_url"/>
                                {/* {hasError && <p className="text-red-400 text-sm">Input must not be empty</p>} */}
                            </div>
                        </div>
                        
                        <div className="mb-2 flex justify-between">
                            <label className="text-md" htmlFor='publisher'>Publisher</label>
                            <div>
                                <input className="border-2 focus:outline-none rounded-md" name="pubkisher" ref={publisher}/>
                                {/* {hasError && <p className="text-red-400 text-sm">Input must not be empty</p>} */}
                            </div>
                        </div>

                        <div className="mb-2 flex justify-between">
                            <label className="text-md" htmlFor='prep_time'>rep time</label>
                            <div>
                                <input className="border-2 focus:outline-none rounded-md" name="prep_time" ref={prep_time}/>
                                {/* {hasError && <p className="text-red-400 text-sm">Input must not be empty</p>} */}
                            </div>
                        </div>

                        <div className="mb-2 flex justify-between">
                            <label className="text-md" htmlFor='serings'>Servings</label>
                            <div>
                                <input className="border-2 focus:outline-none rounded-md" name="servings" ref={servings}/>
                                {/* {hasError && <p className="text-red-400 text-sm">Input must not be empty</p>} */}
                            </div>
                        </div>

                    </div>
                    <div>
                        <h1 className="mb-3 text-3xl font-bold">Ingridients</h1>

                        <div className="mb-2 flex justify-between">
                            <label className="text-md" htmlFor='ingridient_1'>Ingredient 1</label>
                            <div>
                                <input className="border-2 focus:outline-none rounded-md" name="ingridient_1" ref={ingridient_1}/>
                                {/* {hasError && <p className="text-red-400 text-sm">Input must not be empty</p>} */}
                            </div>
                        </div>

                        <div className="mb-2 flex justify-between">
                            <label className="text-md" htmlFor='ingridient_2'>Ingredient 2</label>
                            <div>
                                <input className="border-2 focus:outline-none rounded-md" name="ingridient_2" ref={ingridient_2}/>
                                {/* {hasError && <p className="text-red-400 text-sm">Input must not be empty</p>} */}
                            </div>
                        </div>

                        <div className="mb-2 flex justify-between">
                            <label className="text-md" htmlFor='ingridient_3'>Ingredient 3</label>
                            <div>
                                <input className="border-2 focus:outline-none rounded-md" name="ingridient_3" ref={ingridient_3}/>
                                {/* {hasError && <p className="text-red-400 text-sm">Input must not be empty</p>} */}
                            </div>
                        </div>

                        <div className="mb-2 flex justify-between">
                            <label className="text-md" htmlFor='ingridient_4'>Ingredient 4</label>
                            <div>
                                <input className="border-2 focus:outline-none rounded-md" name="ingridient_4" ref={ingridient_4}/>
                                {/* {hasError && <p className="text-red-400 text-sm">Input must not be empty</p>} */}
                            </div>
                        </div>

                        <div className="mb-2 flex justify-between">
                            <label className="text-md" htmlFor='ingridient_5'>Ingredient 5</label>
                            <div>
                                <input className="border-2 focus:outline-none rounded-md" name="ingridient_5" ref={ingridient_5}/>
                                {/* {hasError && <p className="text-red-400 text-sm">Input must not be empty</p>} */}
                            </div>
                        </div>

                        <div className="mb-2 flex justify-between">
                            <label className="text-md" htmlFor='ingridient_6'>Ingredient 6</label>
                            <div>
                                <input className="border-2 focus:outline-none rounded-md" name="ingridient_6" ref={ingridient_6}/>
                                {/* {hasError && <p className="text-red-400 text-sm">Input must not be empty</p>} */}
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="flex justify-center mt-3">
                    <button className="px-12 py-4 rounded-full bg-orange-300 text-white" >Upload</button>
                </div>
            </form>
        </AddRecipeModal>
    )
}

export default AddRecipeFormTest;