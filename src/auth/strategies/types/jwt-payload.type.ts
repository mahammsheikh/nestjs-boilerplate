import { Session } from '@entities/session/domain/session';
import { User } from '@entities/users/domain/user';

export type JwtPayloadType = Pick<User, 'id' | 'role'> & {
  sessionId: Session['id'];
  iat: number;
  exp: number;
};
