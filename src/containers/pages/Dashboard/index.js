import { AddRecipeModal, Header, Input, Loading, Message, RecipeItem } from "../../../components";
import { DetailRecipe } from "../../organism";
import { useSelector } from "react-redux";

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

    const Modal = () => {
        return(
            <AddRecipeModal>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <h1 className="mb-3 text-3xl font-bold">Data Recipe</h1>
                        <Input label="Title" name="title"/>
                        <Input label="URL" name="url"/>
                        <Input label="Image Url" name="imageUrl"/>
                        <Input label="Publisher" name="publisher"/>
                        <Input label="Prep time" name="prepTime"/>
                        <Input label="Sevings" name="serving"/>
                    </div>
                    <div>
                        <h1 className="mb-3 text-3xl font-bold">Ingridients</h1>
                        <Input label="Ingredient 1" name="inredient_1"/>
                        <Input label="Ingredient 2" name="inredient_2"/>
                        <Input label="Ingredient 3" name="inredient_3"/>
                        <Input label="Ingredient 4" name="inredient_4"/>
                        <Input label="Ingredient 5" name="inredient_5"/>
                        <Input label="Ingredient 6" name="inredient_6"/>
                    </div>
                </div>
                <div className="flex justify-center mt-3">
                    <button className="px-12 py-4 rounded-full bg-orange-300 text-white" href={detailRecipe.source_url}>Upload</button>
                </div>
            </AddRecipeModal>
        )
    }

    return(
        <div className="w-full min-h-screen bg-gradient-to-r from-orange-200 to-orange-400 py-28 px-20">
            {
                showModalAddRecipe ? <Modal/> :''
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