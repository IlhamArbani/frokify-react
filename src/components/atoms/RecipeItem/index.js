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
        <div className="flex w-full justify-center mb-4">
            <div className='flex w-4/5'>
                <img className="rounded-full h-14 w-14 mr-3" src={`${props.image}`} alt=''/>
                <div className='truncate'>
                    <h1 className='text-orange-300 truncate'>{props.title}</h1>
                    <button className='text-sm text-gray-400' onClick={() => getDetail(props.id)}>Detail Recepies</button>
                </div>
            </div>
        </div>
    )
}

export default RecipeItem;