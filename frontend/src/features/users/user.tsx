export interface IUser {
  firstName: string;
  lastName: string;
  username: string;
  role: string;
  _id: string;
}

export interface IGenericResponse {
  status: string;
  message: string;
}
