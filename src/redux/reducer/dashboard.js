const initialState = {
    bookmarked:[],
    recipe:[],
    detailRecipe:'',
    myRecipe:[]
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

    if(action.type === "SET_DETAIL_RECIPE"){
        return{
            ...state,
            detailRecipe:action.value
        }
    }

    if(action.type === "ADD_RECIPE"){
        return{
            ...state,
            myRecipe:[...state.myRecipe,action.value]
        }
    }
    
    return state
}