import memoize from 'lru-memoize';
import { createValidator, required, email } from '../../utils/validation';

const contactValidation = createValidator({
    email: [email, required],
    firstName: required,
    lastName: required,
    message: required
});
export default memoize(10)(contactValidation);