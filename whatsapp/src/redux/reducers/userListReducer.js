import * as actionsType from '../actions/actionsType';
import initialState from './initialState';

export function userListReducer(state=initialState.users,actions){
    switch (actions.type) {
        case actionsType.GET_USERS_SUCCES:
            return actions.payload
        default:
            return state;
    }
}

export default userListReducer;