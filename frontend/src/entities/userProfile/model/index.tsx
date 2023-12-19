export enum UserRole {
  USER = "Пользователь",
  ADMIN = "Администратор",
  MANAGER = "Менеджер",
}

export interface UserProfileProps {
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  role: UserRole;
}

export default function userProfile({
  firstName,
  lastName,
  email,
  role,
}: UserProfileProps): UserProfileProps {
  let demoUser: UserProfileProps;

  demoUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    role: role,
  };

  return demoUser;
}
