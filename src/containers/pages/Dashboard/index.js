import { AddRecipeForm, AddRecipeFormTest, AddRecipeModal, Header, Input, Loading, Message, RecipeItem } from "../../../components";
import { DetailRecipe } from "../../organism";
import { useSelector } from "react-redux";
import useInput from "../../../hooks/useInput";

const Dashboard = () => {

    const recipeItems = useSelector(state => state.dashboardReducer.recipe);
    const showLoading = useSelector(state => state.globalReducer);
    const detailRecipe = useSelector(state => state.dashboardReducer.detailRecipe);
    const showModalAddRecipe = useSelector(state => state.globalReducer.showModalAddRecipe);



  


    const RecipeItems = () => {
        return recipeItems.map(item => {
            return <RecipeItem image={item.image_url} title={item.title} publisher={item.publisher} id={item.recipe_id} key={item.recipe_id}/>
         })
    }


    const formHandler = (event) => {
        event.preventDefault()
        

        console.log()
    }

    

    return(
        <div className="w-full min-h-screen bg-gradient-to-r from-orange-200 to-orange-400 py-28 px-20">
            {
                showModalAddRecipe && <AddRecipeForm/>
                // showModalAddRecipe && <AddRecipeFormTest/>
            }
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