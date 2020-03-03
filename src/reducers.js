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

const rootReducer = combineReducers({
    currentUser
});

export default rootReducer;