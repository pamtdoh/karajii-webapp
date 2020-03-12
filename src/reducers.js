import { combineReducers } from 'redux'

const currentUser = (user = null, action) => {
    switch (action.type) {
        case "LOG_IN":
            return action.user;
        case "LOG_OUT":
            return null;
        default:
            return user;
    }
}

const catalogue = (state = [], action) => {
    switch (action.type) {
        case "RECEIVE_CATALOGUE":
            return action.catalogue;
        default:
            return state;
    }
}

const selectedMovie = (state = null, action) => {
    switch (action.type) {
        case "RECEIVE_SELECTED_MOVIE":
            return action.selectedMovie;
        default:
            return state;
    }
}

// const search = (state = { keyword: "", genre: "" }, action) => {
//     switch (action.type) {
//         case "SEARCH_MOVIES":
//             return action.searchQuery;
//         default:
//             return state;
//     }
// }

const rootReducer = combineReducers({
    currentUser,
    catalogue,
    selectedMovie
    // search
});

export default rootReducer;