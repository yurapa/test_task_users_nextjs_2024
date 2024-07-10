import axios from 'axios';
import { User } from '@/types/user';
const API_BASE_URL = 'https://reqres.in/api';

export const apiService = {
  fetchUsers: (page: number = 1) => axios.get(`${API_BASE_URL}/users`, { params: { page } }),
  fetchUser: (id: number) => axios.get(`${API_BASE_URL}/users/${id}`),
  createUser: (name: string, job: string) => axios.post(`${API_BASE_URL}/users`, { name, job }),
  updateUser: (id: number, name: string, job: string) => axios.put(`${API_BASE_URL}/users/${id}`, { name, job }),
  deleteUser: (id: number) => axios.delete(`${API_BASE_URL}/users/${id}`),
  login: (email: string, password: string) => axios.post(`${API_BASE_URL}/login`, { email, password }),
  signUp: (email: string, password: string) => axios.post(`${API_BASE_URL}/register`, { email, password }),
};
