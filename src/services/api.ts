import axios from 'axios';
import { User } from '@/types/user';
const API_BASE_URL = 'https://reqres.in/api';

export const apiService = {
  fetchUsers: (page: number = 1) => axios.get(`${API_BASE_URL}/users`, { params: { page } }),
  fetchUser: (id: number) => axios.get(`${API_BASE_URL}/users/${id}`),
  createUser: (userData: User) => axios.post(`${API_BASE_URL}/users`, userData),
  updateUser: (id: number, userData: User) => axios.put(`${API_BASE_URL}/users/${id}`, userData),
  deleteUser: (id: number) => axios.delete(`${API_BASE_URL}/users/${id}`),
  login: (email: string, password: string) => axios.post(`${API_BASE_URL}/login`, { email, password }),
  signUp: (userData: User) => axios.post(`${API_BASE_URL}/register`, userData),
};
