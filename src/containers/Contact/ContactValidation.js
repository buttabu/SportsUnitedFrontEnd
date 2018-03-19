import memoize from 'lru-memoize';
import { createValidator, required, email } from '../../utils/validation';

const contactValidation = createValidator({
    email: [email, required],
    name: required,
    credential: required,
    message: required
});
export default memoize(10)(contactValidation);