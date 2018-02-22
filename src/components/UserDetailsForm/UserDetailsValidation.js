import memoize from 'lru-memoize';
import { createValidator, required, email } from 'utils/validation';

const validate = createValidator({
  credential: required,
  firstName: required,
  lastName: required,
});

export default memoize(10)(validate);

// export default memoize(10)(loginValidation);

// const validate = (values) => {
//   const errors = {}
//   if (!values.firstName) {
//     errors.firstName = 'Required'
//   }
//   if (!values.lastName) {
//     errors.lastName = 'Required'
//   }
//   if (!values.username) {
//     errors.username = 'Required'
//   }
//   if (!values.credential) {
//     errors.credential = 'Required'
//   }
//   return errors
// }

// export default validate
