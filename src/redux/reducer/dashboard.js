const initialState = {
    bookmarked:[],
    recipe:[]
}

export const dashboardReducer = (state = initialState,action) => {

    if(action.type === 'MARKED'){
        
        return {
            ...state,
            bookmarked:[...state.bookmarked,action.value]
        };
    }

    if(action.type === 'SAVE_RECIPE'){
        return {
            ...state,
            recipe:[...action.value]
        }
    }

    if(action.type === 'UNMARKED'){
        
        return {
            ...state,
            bookmarked:[...action.value]
        };
    }

    return state
}