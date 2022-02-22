export const SET_USER_LOGIN = 'SET_USER_LOGIN';

export const setUser = user => dispatch => {
    dispatch({
        type: SET_USER_LOGIN,
        payload: user,
    })
}