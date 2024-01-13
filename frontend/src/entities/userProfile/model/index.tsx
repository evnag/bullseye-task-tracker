export enum UserRole {
  USER,
  ADMIN,
  MANAGER,
}

export interface UserProfileProps {
  firstName: string;
  lastName: string;
  username: string;
  avatar?: string;
  role: UserRole;
}

export default function userProfile({
  firstName,
  lastName,
  username,
  role,
}: UserProfileProps): UserProfileProps {
  let demoUser: UserProfileProps;

  demoUser = {
    firstName: firstName,
    lastName: lastName,
    username: username,
    role: role,
  };

  return demoUser;
}
