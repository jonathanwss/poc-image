import { UserSchema } from '@/models/User/profile';
import Realm from 'realm';

const realm = new Realm({ schema: [UserSchema] });

export const createUser = (
  name: string,
  surname: string,
  email: string,
  password: string
) => {
  realm.write(() => {
    realm.create('User', { email, password, name, surname });
  });
};

export const updateUserProfilePicture = (email: string, newPicture: string) => {
  const user = realm.objects('User').filtered(`email == "${email}"`)[0];
  if (user) {
    realm.write(() => {
      user.profilePicture = newPicture;
    });
  }
};

export const getUserByEmail = (email: string) => {
  return realm.objects('User').filtered(`email == "${email}"`)[0];
};

export const validateUserLogin = (email: string, providedPassword: string) => {
  const user = realm.objects('User').filtered(`email == "${email}"`)[0];

  if (user && user.password === providedPassword) {
    return true;
  }

  return false;
};
