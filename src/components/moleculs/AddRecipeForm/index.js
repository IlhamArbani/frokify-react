import { AddRecipeModal, Input } from "../.."
import { useRef,useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addRecipe } from "../../../redux/action";
import useInput from "../../../hooks/useInput";



const AddRecipeForm = () => {
    const recipe = useSelector(state => state.dashboardReducer.myRecipe)
    const dispatch = useDispatch();
    const [urlState, setStateUrl] = useState()

    const data = {
        title:'',
        url:'',
        image_url:'',
        publisher:'',
        prep_time:'',
        servings:'',
        ingridient:''
    } 

    
    const setTitle = (e) => {
        data.title = e;
    }
    const setUrl = (e) => {
        data.url = e;
    }
    const setImageUrl = (e) => {
        data['image_url'] = e;
    }
    const setPublisher = (e) => {
        data.publisher = e;
    }
    const setPrepTime = (e) => {
        data['prep_time'] = e;
    }
    const setServings = (e) => {
        data.servings = e
    }
    const setIngridient = (e) => {
        data.ingridient = e;
    }

    
    // let url = parentCallback()
    const {
        value,
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
        // const data = {
        //     title:value,
        //     url:url,
        //     image_url:image_url.current.value,
        //     publisher:publisher.current.value,
        //     prep_time:prep_time.current.value,
        //     servings:servings.current.value,
        //     ingridient:[ingridient_1.current.value,ingridient_2.current.value,ingridient_3.current.value,ingridient_4.current.value,ingridient_5.current.value,ingridient_6.current.value]
        // } 

        console.log(data);

        dispatch(addRecipe(data));

        console.log(recipe);

    }

    return(
        <AddRecipeModal>
            <form onSubmit={formHandler}>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                    <h1 className="mb-3 text-3xl font-bold">Data Recipe</h1>

                        <Input  label='Title' name='title'  callback={setTitle} />
                        <Input  label='URL' name='url' callback={setUrl} />
                        <Input  label='Imgae URL' name='image_url'  callback={setImageUrl} />
                        <Input  label='Publisher' name='publisher' callback={setPublisher} />
                        <Input  label='Prep time' name='prep_time'  callback={setPrepTime} />
                        <Input  label='Servings time' name='servings'  callback={setServings} />
                        

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

export default AddRecipeForm;