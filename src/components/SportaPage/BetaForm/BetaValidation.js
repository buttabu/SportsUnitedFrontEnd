import memoize from 'lru-memoize';
import { createValidator, required, email } from 'utils/validation';

const validate = createValidator({
  name: required,
  email: [email, required],
  credential: required,
});

export default memoize(10)(validate);