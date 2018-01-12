import {required, email, match } from 'utils/validation';

const validate = (values) => {
  const errors = {}
  if (required(values.firstname) != '') {
    errors.firstname = required(values.firstname);
  }
  if (required(values.lastname) != '') {
    errors.lastname = required(values.lastname);
  }
  if (required(values.username) != '') {
    errors.username = required(values.username);
  }
  if (required(values.credential) != '') {
    errors.credential = required(values.credential);
  }
  if (required(values.email) != '') {
    errors.email = required(values.email);
  } else if (email(values.email) != ''){
    errors.email = email(values.email);
  }
  if (required(values.password) != '') {
    errors.password = required(values.password);
  }
  if (required(values.confirmpassword) != '') {
    errors.confirmpassword = required(values.confirmpassword);
  } else if (values.password !== values.confirmpassword){
    errors.confirmpassword = 'Does not match';
  }
  return errors;
}

export default validate