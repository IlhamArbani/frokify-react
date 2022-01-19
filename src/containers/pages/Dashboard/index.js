import { Header, Message, RecipeItem } from "../../../components";

const Dashboard = () => {
    return(
        <div className="h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500 pt-28">
            <div className="bg-gray-100 rounded-md border-2 w-3/4 mx-auto h-5/6 overflow-hidden">
                <Header/>
                <div className="flex h-full">
                    <div className="w-2/5 bg-white rounded-sm h-full">
                        <RecipeItem/>
                    </div>
                    <div className="w-3/5">
                        <Message content="Start by searching for a recipe or an ingredient. Have fun!"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;