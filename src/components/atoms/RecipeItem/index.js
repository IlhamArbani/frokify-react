import Axios from 'axios';

const RecipeItem = (props) => {
    const getDetail  = () => {
        Axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${props.id}`)
        .then(e => {
            console.log(e)
            props.parentCallback(e.data.recipe)
        })
        .catch(e => {

        })
    }

    return (
        <button onClick={() => getDetail(props.id)}>
            <div className="flex w-full justify-center hover:bg-orange-200 py-3 transition-colors ease-out">
                <div className='flex w-4/5'>
                    <img className="rounded-full h-14 w-14 mr-3" src={`${props.image}`} alt=''/>
                    <div className='truncate'>
                        <h1 className='text-orange-300 truncate text-left'>{props.title}</h1>
                        <p className='text-sm text-gray-400 text-left'>{props.publisher}</p>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default RecipeItem;