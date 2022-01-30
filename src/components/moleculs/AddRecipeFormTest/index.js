import { AddRecipeModal } from "../.."
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecipe } from "../../../redux/action";
import { Input } from "../..";
import { saveBookmark } from "../../../redux/action";




const Form = () => {

    const dispatch = useDispatch()

    const [url,setUrl] = useState('')
    const [title,setTitle] = useState('')
    const [imageUrl,setImageUrl] = useState('')
    const [publisher,setPublisher] = useState('')
    const [prepTime,setPrepTime] = useState('')
    const [servings,setServings] = useState('')
    const [ingridient1,setIngridient1] = useState('')
    const [ingridient2,setIngridient2] = useState('')
    const [ingridient3,setIngridient3] = useState('')
    const [ingridient4,setIngridient4] = useState('')
    const [ingridient5,setIngridient5] = useState('')
    const [ingridient6,setIngridient6] = useState('')

    const formHandler = (event) => {
        
        event.preventDefault()
        
        const data = {
            id:Math.floor(Math.random() * 100) + 1,
            title,
            url,
            image_url:imageUrl,
            publisher,
            prep_time:prepTime,
            servings,
            ingridients:[ingridient1,ingridient2,ingridient3,ingridient4,ingridient5,ingridient6]
        } 

        console.log(data);

        // dispatch(addRecipe(data));
        dispatch(saveBookmark(data));

    }

    return(
        <form onSubmit={formHandler}>
        <div className="grid grid-cols-2 gap-3">
            <div>
            <h1 className="mb-3 text-3xl font-bold">Data Recipe</h1>
                
                <Input  name='title' value={title} onChange={setTitle} label='Title'/>
                <Input  name='url' value={url} onChange={setUrl} label='URL'/>
                <Input  name='image_url' value={imageUrl} onChange={setImageUrl} label='Image URL'/>
                <Input  name='publisher' value={publisher} onChange={setPublisher} label='Publisher'/>
                <Input  name='prep_time' value={prepTime} onChange={setPrepTime} label='Prep Time'/>
                <Input  name='servings' value={servings} onChange={setServings} label='Servings'/>
                
            </div>
            <div>
            <h1 className="mb-3 text-3xl font-bold">Ingridients</h1>
                
                <Input  name='ingridient1' value={ingridient1} onChange={setIngridient1} label='Ingridient 1'/>
                <Input  name='ingridient2' value={ingridient2} onChange={setIngridient2} label='Ingridient 2'/>
                <Input  name='ingridient3' value={ingridient3} onChange={setIngridient3} label='Ingridient 3'/>
                <Input  name='ingridient4' value={ingridient4} onChange={setIngridient4} label='Ingridient 4'/>
                <Input  name='ingridient5' value={ingridient5} onChange={setIngridient5} label='Ingridient 5'/>
                <Input  name='ingridient6' value={ingridient6} onChange={setIngridient6} label='Ingridient 6'/>
                
            </div>
           
        </div>
        <div className="flex justify-center mt-3">
            <button className="px-12 py-4 rounded-full bg-orange-300 text-white" >Upload</button>
        </div>
    </form>
    )
}


const AddRecipeFormTest = () => {
    
    return(
        <AddRecipeModal>
            <Form />
        </AddRecipeModal>
    )
}

export default AddRecipeFormTest;