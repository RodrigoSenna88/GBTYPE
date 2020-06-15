import { Router } from 'express';

import Usersrepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

const sessionsRouter = Router();


sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const usersrepository = new Usersrepository();
  const authenticateUser = new AuthenticateUserService(usersrepository);

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
