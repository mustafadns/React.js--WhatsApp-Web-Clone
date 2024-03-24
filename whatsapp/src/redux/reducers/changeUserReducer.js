import * as actionsType from '../actions/actionsType';
import initialState from './initialState';

export function changeUserReducer(state=initialState.currentUser,actions){
    switch (actions.type) {
        case actionsType.CHANGE_USER:
            return actions.payload
        default:
            return state;
    }
}

export default changeUserReducer;