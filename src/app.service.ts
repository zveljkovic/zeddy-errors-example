import { Injectable } from '@nestjs/common';
import {SharedErrors} from './app.errors';

@Injectable()
export class AppService {
  throwCustomError(): string {
    throw new SharedErrors.IntentionalError({reason: "Testing errors"})
  }
  throwCustomException(): string {
    throw new SharedErrors.JwtTokenMissingBearer();
  }
}
