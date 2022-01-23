import Axios from 'axios';
import { ActionTypes, Api } from '../constant';

export const searchRecipe = (input) => (dispatch) => {
    Axios.get(`${Api.url}/search?q=${input}`)
        .then(e => {
            console.log(e);
            // props.parentCallback(e.data.recipes);
            dispatch({type:ActionTypes.SAVE_RECIPE,value:e.data.recipes})
            dispatch({type:"SET_LOADING",value:false})
        })
        .catch(e => {
            console.log(e);
            dispatch({type:"SET_LOADING",value:false})
        })
}

export const getDetailRecipe = (id) => (dispatch) => {
    Axios.get(`${Api.url}/get?rId=${id}`)
        .then(e => {
            console.log(e)
            dispatch({type:"SET_DETAIL_RECIPE",value:e.data.recipe})
            dispatch({type:"SET_LOADING_DETAIL",value:false})

        })
        .catch(e => {
            dispatch({type:"SET_LOADING_DETAIL",value:false})
        })
}