import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import Usersrepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

import ensureAuthenticated from '../middlewares/ensureAuthtenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);


usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const usersrepository = new Usersrepository();
  const createUser = new CreateUserService(usersrepository);

  const user = await createUser.execute({
    name,
    email,
    password,
  });

  delete user.password;

  return response.json(user);
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    const usersrepository = new Usersrepository();
    const updateUserAvatar = new UpdateUserAvatarService(usersrepository);

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  },
);

export default usersRouter;
