export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const LOGIN = 'LOGIN';
export const SIGNIN_BY_TOKEN_ADMIN = 'SIGNIN_BY_TOKEN_ADMIN';
export const MODIFY_BANDEAU = 'MODIFY_BANDEAU';
export const SET_MODAL_STATUS = 'SET_MODAL_STATUS';
export const RELOAD = 'RELOAD';


export const setModalStatus = (payload) => ({
  type: SET_MODAL_STATUS,
  payload
})
export const reload = (payload) => ({
  type: RELOAD,
  payload
})

export const modifyBandeau = (payload) => ({
  type: MODIFY_BANDEAU,
  payload
})

export const signinByTokenAdmin = (payload) => ({
  type: SIGNIN_BY_TOKEN_ADMIN,
  payload
});

export const increment = () => ({
  type: INCREMENT_COUNTER,
});

export const decrement = () => ({
  type: DECREMENT_COUNTER,
});


export const login = (payload) => ({
  type: LOGIN,
  payload
})