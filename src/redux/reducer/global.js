const initialState = {
    loading:false,
    detailLoading:false
}

export const globalReducer = (state=initialState,action) => {

    if(action.type === "SET_LOADING"){
        return{
            ...state,
            loading:action.value
        }
    }

    if(action.type === "SET_LOADING_DETAIL"){
        return {
            ...state,
            detailLoading : action.value
        }
    }

    return state
}