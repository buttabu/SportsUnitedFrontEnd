import {required, email, match } from 'utils/validation';

const validate = (values) => {
  const errors = {}
  // if (required(values.firstname) != '') {
  //   errors.firstname = required(values.firstname);
  // }
  // if (required(values.lastname) != '') {
  //   errors.lastname = required(values.lastname);
  // }
  // if (required(values.username) != '') {
  //   errors.username = required(values.username);
  // }
  // if (required(values.credential) != '') {
  //   errors.credential = required(values.credential);
  // }
  if (required(values.email) != '') {
    errors.email = required(values.email);
  } else if (email(values.email) != ''){
    errors.email = email(values.email);
  }
  if (required(values.password1) != '') {
    errors.password1 = required(values.password1);
  }
  if (required(values.password2) != '') {
    errors.password2 = required(values.password2);
  } else if (values.password1 !== values.password2){
    errors.password2 = 'Does not match';
  }
  return errors;
}

export default validate