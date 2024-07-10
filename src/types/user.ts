export interface User {
  id: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
  password?: string;
}

export interface UserListResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

export interface AuthResponse {
  token: string;
}
