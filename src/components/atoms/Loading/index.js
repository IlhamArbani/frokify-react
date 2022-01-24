import { Logo } from "../../../assets"
const Loading = () => {
    return (
        <div className="flex justify-center">
            <img className="h-20 w-20 animate-spin" src={Logo} alt=""/>
        </div>
    )
}

export default Loading