import { useState } from "react";
import { useSelector } from "react-redux";
import { RecipeItem } from "..";

const Bookmarks = (props) => {
    const items = useSelector(state => state.dashboardReducer.bookmarked)
    const [shownBookmark,setShownBookmark] = useState(false);

    const showBookmark = () =>  {
        setShownBookmark(!shownBookmark);
    }
   

    return (
        <div className="relative">
            <button onClick={showBookmark} className={props.Style}>Bookmarks</button>
            <div className={`${shownBookmark? 'flex':'hidden'} flex-col absolute right-0 top-10 bg-white w-52 rounded-lg z-40 h-48 overflow-y-auto`}>
                <h1 className="text-orange-400 mt-2 ml-2">Book Marks</h1>
                { 
                    items.map(item => {
                        return <RecipeItem parentCallback={props.getDetail} publisher={item.publisher} image={item.image_url} title={item.title} id={item.recipe_id} key={item.recipe_id}/>
                    })
                }
            </div>
        </div>
    )
}

export default Bookmarks;