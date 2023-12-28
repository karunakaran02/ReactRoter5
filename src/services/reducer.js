import { GETPASSWORDVALUE, GETUSERVALUE, USERNAME, PASSWORD } from "./actionType";
import { initialState } from "./initialState";

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GETUSERVALUE:
            return ({ ...action.payload })
        case GETPASSWORDVALUE:
            return ({ ...state, password: action.payload })
        case USERNAME:
            return ({ ...state, username: action.payload })
        case PASSWORD:
            return ({ ...state, password: action.payload })
        default:
            return state
    }
}
