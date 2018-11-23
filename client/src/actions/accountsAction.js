import axios from 'axios';
import { VERIFY_TOKEN, USER_LOGIN, USER_SIGNUP, USER_LOGOUT, USER_HISTORY, SEND_MAIL, RESET_PASSWORD } from './types.js';
import { getFromStorage } from '../helpers/localStorage';

export const verifyToken = () => dispatch => {
  const token = getFromStorage('the_main_app');
  if(token) {
    axios.get(`/api/account/verify?token=${token}`)
      .then(res => {
        if(res.data.success)
          dispatch({
            type: VERIFY_TOKEN,
            payload: token,
            name: res.data.name
          })
        }
      )
  }
}

export const userLogin = (username, password) => dispatch => {
    axios.post('/api/account/signin', {
      username: username,
      password: password
    }).then(res =>
      dispatch({
        type: USER_LOGIN,
        payload: res.data
      })
    )
}

export const userSignup = (username, name, email, password, repassword) => dispatch => {
    axios.post('/api/account/signup', {
      username: username,
      name: name,
      email: email,
      password: password,
      repassword: repassword
    }).then(res =>
      dispatch({
        type: USER_SIGNUP,
        payload: res.data
      })
    )
}

export const userLogout = token => dispatch => {
    axios.get(`/api/account/logout?token=${token}`)
    .then(res => {
      if(res.data.success)
        dispatch({
          type: USER_LOGOUT,
        })
    })
}

export const getShoppingHistory = token => dispatch => {
    axios.get(`/api/user?token=${token}`)
    .then(res => {
        dispatch({
          type: USER_HISTORY,
          payload: res.data
        })
    })
}

export const sendEmail = email => dispatch => {
    axios.post(`/api/account/verify/forgot`, {
      email: email
    })
    .then(res => {
        dispatch({
          type: SEND_MAIL,
          payload: res.data
        })
    })
}

export const resetPassword = (token, pwd, repwd) => dispatch => {
    axios.post(`/api/account/verify/reset`, {
      token: token,
      password: pwd,
      repassword: repwd
    })
    .then(res => {
        dispatch({
          type: RESET_PASSWORD,
          payload: res.data
        })
    })
}
