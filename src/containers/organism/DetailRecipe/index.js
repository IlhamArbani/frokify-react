import { useEffect,useState } from "react";
import { ServingCounter } from "../../../components";
import {useDispatch,useSelector} from 'react-redux'
import { saveBookmark, unmark } from "../../../redux/action";

const DetailRecipe = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.dashboardReducer.bookmarked);
    const [bookmarkItemId,setBookmarkItemId] = useState();
    const detailRecipe = useSelector(state => state.dashboardReducer.detailRecipe)

    const marked = () => {
        console.log(detailRecipe)
        dispatch(saveBookmark(detailRecipe))
        // setBookmarkItem(data)
        console.log('change initialState : ');
        console.log(data);
    }

    const unmarked = (id) => {
        const tmp = data.filter(item => {
            if(item.recipe_id !== id){
                return item
            }
        })
        console.log(tmp)
        dispatch(unmark(tmp))
    }

    useEffect(() => {
        setBookmarkItemId(!!data.find(e => {
            return e.recipe_id === detailRecipe.recipe_id
        }))
    })

    return(
        <div className="h-full w-full">
            <div className="w-full h-80 bg-no-repeat bg-cover relative" style={{backgroundImage : `url(${detailRecipe.image_url})`,}}>
                <div className="h-full w-full bg-orange-500 opacity-50 justify-center">
                </div>
                <div className="absolute -bottom-3 left-2/4 -ml-48 w-96">
                    <h1 className="leading-9 px-4 -rotate-2 text-white text-4xl opacity-100 text-center">
                        <span className="bg-gradient-to-r from-orange-200 to-orange-400">
                            {detailRecipe.title}
                        </span>
                    </h1>
                </div>
            </div>
            <div className="w-full bg-white flex justify-between py-12 items-center px-12">
                <p>60 Minutes</p>
                <ServingCounter/>
                {
                    bookmarkItemId?
                    <button onClick={()=>unmarked(detailRecipe.recipe_id)} className='h-12 w-12 rounded-full  bg-blue-400'></button> :
                    <button onClick={marked} className='h-12 w-12 rounded-full  bg-orange-400'></button>
                }
            </div>
            <div className="w-full px-6 flex flex-col items-center py-4">
                <h1 className="text-orange-300 font-bold text-xl text-center mb-6">Recipe Ingredients</h1>
                <div className="grid grid-rows-8 grid-cols-2 grid-flow-row gap-2">
                        {detailRecipe.ingredients.map((item,index) => {
                            return <p className="text-orange-500" key={index}>{item}</p>
                        })}
                </div>
            </div>
            <div className="flex flex-col items-center px-12 bg-orange-50 py-6">
                <h1 className="text-orange-400 text-xl">HOW TO COOK IT</h1>
                <p className="text-center text-gray-400 py-5">This recipe was carefully designed and tested by The Pioneer Woman. Please check out directions at their website.</p>
                <a className="px-12 py-4 rounded-full bg-orange-300 text-white" href={detailRecipe.source_url}>Directions</a>
            </div>
        </div>
    )
}

export default DetailRecipe;