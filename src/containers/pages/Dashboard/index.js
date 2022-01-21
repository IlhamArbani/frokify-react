import { Header, Message, RecipeItem } from "../../../components";
import { useState } from "react";
import { DetailRecipe } from "../../organism";

const Dashboard = () => {
    const [items,setItems] = useState([]);
    const [detail,setDetail] = useState();

    const callback = (items) => {
        setItems(items)
    }

    const getDetail = (detail) => {
        setDetail(detail)
    }

    return(
        <div className="w-full min-h-screen bg-gradient-to-r from-orange-200 to-orange-400 py-28 px-20">
            <div className="bg-gray-100 rounded-md shadow-md w-full h-352 min-h-screen mx-auto flex flex-col">
                <Header parentCallback={callback} getDetail={getDetail}/>
                <div className="flex flex-1 overflow-hidden">
                    <div className="w-2/5 flex flex-col bg-white rounded-sm overflow-y-auto">
                        {
                            items.map(item => {
                               return <RecipeItem parentCallback={getDetail} image={item.image_url} title={item.title} publisher={item.publisher} id={item.recipe_id} key={item.recipe_id}/>
                            })
                        }
                    </div>
                    <div className="w-3/ overflow-y-auto">
                        {
                            detail ? <DetailRecipe recipe={detail}/> : <Message content="Start by searching for a recipe or an ingredient. Have fun!"/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;