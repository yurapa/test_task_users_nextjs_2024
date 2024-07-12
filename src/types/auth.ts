export interface Auth {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface RegistrationResponse {
  id: number;
  token: string;
}
