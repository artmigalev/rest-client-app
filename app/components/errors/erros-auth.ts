import { FirebaseError } from 'firebase/app';

export class AuthUserError extends FirebaseError {
  constructor(code: string, message: string) {
    super(code, message);
    this.message = message;
  }
}
