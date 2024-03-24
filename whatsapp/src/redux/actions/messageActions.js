import * as actionsType from './actionsType';

export function getMessagesSucces(messages){
    return {type:actionsType.GET_MESSAGES_SUCCES , payload:messages}
}

export function getMessages(userId) {
    return function (dispatch) {
        let url= "http://localhost:3000/messages"
        if(userId) {
            url = url + "?userId=" + userId
        }
        return fetch(url)
        .then(response => response.json())
        .then(result => dispatch(getMessagesSucces(result)));
    };
}
