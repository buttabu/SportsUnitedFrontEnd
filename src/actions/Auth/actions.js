import { LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, 
  REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE, 
  LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE
} from '../../redux/modules/constants';

//import cookie from 'js-cookie';

// =========================================
// ============== LOAD ACTION ==============
// =========================================

export function load() {
  return {
    types: [LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE],
    promise: (client) => client.get('api/plugr/user/',{
      authenticated: true,
    })
  };
}

// =============================================
// ============== REGISTER ACTION ==============
// =============================================

export function register(body) {
  return {
    types: [REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE],
    promise: client => client.post('api/plugr/auth/register/', {
        data: body,
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
    promise: (client) => client.post('api/plugr/auth/login/', {
      data: body,
      authenticated: true,
    })
  };
}

// ===========================================
// ============== LOGOUT ACTION ==============
// ===========================================

export function logout() {
  return {
    types: [LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE],
    promise: client => client.post('api/plugr/logout/')
  };
}
