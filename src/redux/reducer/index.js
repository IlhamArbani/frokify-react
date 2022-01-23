import { combineReducers } from "redux"
import {dashboardReducer} from './dashboard'
import { globalReducer } from "./global";

const reducer = combineReducers({dashboardReducer,globalReducer});

export default reducer