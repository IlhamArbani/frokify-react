import {createStore} from 'redux';

const initialState = {
    bookmarked:[]
}

const BookmarkReducer = (state = initialState,action) => {

    if(action.type === 'MARKED'){
        
        return {
            ...state,
            bookmarked:[...state.bookmarked,action.item]
        };
    }

    if(action.type === 'REMOVE_MARKED'){
        return {
            id:'dsafas'
        }
    }

    return state
}

const store = createStore(BookmarkReducer);

export default store