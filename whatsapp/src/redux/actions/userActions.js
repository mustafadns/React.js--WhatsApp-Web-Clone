import * as actionsType from './actionsType';

export function changeUser(user) {
    return {type:actionsType.CHANGE_USER , payload:user}
}

export function getUsersSucces(users){
    return {type:actionsType.GET_USERS_SUCCES , payload:users}
}

export function getUsers() {
    return function (dispatch) {
        let url= "http://localhost:3000/users"
        return fetch(url)
        .then(response => response.json())
        .then(result => dispatch(getUsersSucces(result)));
    };
}