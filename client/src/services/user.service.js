import axios from 'axios';
import authHeader from './auth-header';

const API_URL = `${import.meta.env.VITE_API_URL}/test/`;

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }

  getReportOwnerBoard() {
    axios.get(API_URL + 'user', { headers: authHeader() }).then(

    );
  }
}

export default new UserService();
