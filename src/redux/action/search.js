import Axios from 'axios';
import { ActionTypes, Api } from '../constant';

export const searchRecipe = (input) => (dispatch) => {
    Axios.get(`${Api.url}/search?q=${input}`)
        .then(e => {
            console.log(e);
            // props.parentCallback(e.data.recipes);
            dispatch({type:ActionTypes.SAVE_RECIPE,value:e.data.recipes})
            
        })
        .catch(e => {
            console.log(e);
        })
}