import { Header, Loading, Message, RecipeItem } from "../../../components";
import { useEffect } from "react";
import { DetailRecipe } from "../../organism";
import { useSelector } from "react-redux";

const Dashboard = () => {

    const recipeItems = useSelector(state => state.dashboardReducer.recipe);
    const showLoading = useSelector(state => state.globalReducer);
    const detailRecipe = useSelector(state => state.dashboardReducer.detailRecipe)

    useEffect(() => {
        console.log('Dashboard page :')
        console.log(detailRecipe);
    })


    const RecipeItems = () => {
        return recipeItems.map(item => {
            return <RecipeItem image={item.image_url} title={item.title} publisher={item.publisher} id={item.recipe_id} key={item.recipe_id}/>
         })
    }

    return(
        <div className="w-full min-h-screen bg-gradient-to-r from-orange-200 to-orange-400 py-28 px-20">
            <div className="bg-gray-100 rounded-md shadow-md w-full h-352 min-h-screen mx-auto flex flex-col">
                <Header />
                <div className="flex flex-1 overflow-hidden">
                    <div className="w-2/5 flex flex-col bg-white rounded-sm overflow-y-auto">
                        {
                            showLoading.loading ? <Loading/> : <RecipeItems/>
                        }
                    </div>
                    <div className="w-3/ overflow-y-auto">
                        {/* {
                            showLoading.detailLoading ? <Loading/> : ''
                        } */}
                        {
                            detailRecipe && !showLoading.detailLoading ? <DetailRecipe /> 
                                : showLoading.detailLoading ? <Loading/> 
                                : <Message content="Start by searching for a recipe or an ingredient. Have fun!"/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;