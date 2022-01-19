import { AddRecipe, Bookmarks, SearchRecepi } from "../..";
import { Logo } from "../../../assets";

const Header = () => {
    return (
        <div className="w-full flex items-center">
            <img className="h-12 w-12" src={Logo} alt=""/>
            <h1>Frokify</h1>
            <SearchRecepi/>
            <AddRecipe/>
            <Bookmarks/>
        </div>
    )
}

export default Header;