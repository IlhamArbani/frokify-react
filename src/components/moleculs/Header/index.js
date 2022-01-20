import { AddRecipe, Bookmarks, SearchRecepi } from "../..";
import { Logo } from "../../../assets";

const Header = (props) => {
    return (
        <div className="w-full flex items-center justify-between px-5 h-28">
            <div className="flex items-center">
                <img className="h-20 w-20" src={Logo} alt=""/>
                <h1 className="font-lobster text-3xl">Frokify</h1>
            </div>
            <SearchRecepi parentCallback={props.parentCallback}/>
            <div className="flex">
                <AddRecipe Style="mr-12 text-gray-500 text-lg"/>
                <Bookmarks Style="mr-12 text-gray-500 text-lg"/>
            </div>
        </div>
    )
}

export default Header;