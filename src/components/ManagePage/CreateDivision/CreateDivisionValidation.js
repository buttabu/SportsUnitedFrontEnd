import memoize from 'lru-memoize';
import { createValidator, required, email } from 'utils/validation';

const createDivisionValidation = createValidator({
  divisionName: required,
});

export default memoize(10)(createDivisionValidation);