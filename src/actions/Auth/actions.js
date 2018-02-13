import { LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, 
  REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE, 
  LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE,
  VERIFY_EMAIL_REQUEST, VERIFY_EMAIL_SUCCESS, VERIFY_EMAIL_FAILURE,
  SET_REDIRECT_URL
} from '../../redux/modules/constants';


// =============================================
// ============== REGISTER ACTION ==============
// =============================================

export function register(body) {
  return {
    types: [REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE],
    promise: client => client.post('rest-auth/registration/', {
        data: body,
    })
  };
}



export function verifyEmail(token){
  return {
    // types: [VERIFY_EMAIL_REQUEST, VERIFY_EMAIL_SUCCESS, VERIFY_EMAIL_FAILURE],
    types: [LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE],
    promise: client => client.post(`api/sporta/accounts/verify-email/?token=${token}`, {
    })
  }; 
}


// =========================================
// ============== LOAD ACTION ==============
// =========================================

export function load() {
  return {
    types: [LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE],
    promise: (client) => client.get('rest-auth/user/',{
      authenticated: true,
    })
  };
}


// ==========================================
// ============== LOGIN ACTION ==============
// ==========================================

export function login(body) {
  return {
    types: [LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE],
    promise: (client) => client.post('rest-auth/login/', {
      data: body,
    })
  };
}


export function loginSaveUser(body, flag){
 return function(dispatch) {
    switch(flag) {
      case 'login':
        dispatch(login(body))
          .then((res) => {
            // console.log("\nACTIONS RES LOGINSAVEUSER", res);
            typeof localStorage !== 'undefined' ? localStorage.setItem('id_token', res.token) : '';
            // console.log("\n ACTIONS LOCALSTORAGE", localStorage);
         });
        break;
      default:
        break;
    };
  }
}


// ===========================================
// ============== LOGOUT ACTION ==============
// ===========================================

export function logout() {
  return {
    types: [LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE],
    promise: client => client.post('rest-auth/logout/')
  };
}

export function logoutRemoveUser(){
 return function(dispatch) {
    const flag = 'logout';
    switch(flag) {
      case 'logout':
        dispatch(logout())
          .then((res) => {
            typeof localStorage !== 'undefined' && localStorage.setItem('id_token', null);
         });
        break;
      default:
        break;
    };
  }
}

// =================================================
// ============== REDIRECT URL ACTION ==============
// =================================================


export function setRedirectUrl(url) {
  return {
    type: SET_REDIRECT_URL,
    payload: url
  };
}