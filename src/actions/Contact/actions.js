import { CONTACT_REQUEST, CONTACT_SUCCESS, CONTACT_FAILURE
} from '../../redux/modules/constants';


// =============================================
// ============== REGISTER ACTION ==============
// =============================================

export function contactsporta(body) {
  return {
    types: [CONTACT_REQUEST, CONTACT_SUCCESS, CONTACT_FAILURE],
    promise: client => client.post('api/sporta/contact/', {
        data: body,
        // authenticated: true,
    })
  };
}
