import {ErrorBase, ExceptionBase} from 'zeddy-errors';

export const SharedErrors = {
  EntityNotFound: class extends ExceptionBase<{ type: string; id: number }> {},
  JwtTokenMissingBearer: class extends ExceptionBase {},
  IntentionalError: class extends ErrorBase<{ reason: string }> {},
};
