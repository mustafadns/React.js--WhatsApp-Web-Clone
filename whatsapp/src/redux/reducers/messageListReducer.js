import * as actionsType from '../actions/actionsType';
import initialState from './initialState';

export function messageListReducer(state=initialState.messages,actions){
    switch (actions.type) {
        case actionsType.GET_MESSAGES_SUCCES:
            return actions.payload
        default:
            return state;
    }
}

export default messageListReducer;