// Import the decode function from 'jwt-decode'
import { jwtDecode as decode } from 'jwt-decode';

// Define the AuthService class
class AuthService {


  // Get user data
  getProfile() {
    return decode(this.getToken());
  }

  // Check if user is logged in
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // Check if token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      return decoded.exp < Date.now() / 1000;
    } catch (err) {
      return true; // Handle error case appropriately
    }
  }

  // Get the user token from localStorage
  getToken() {
    return localStorage.getItem('id_token');
  }

  // Save user token to localStorage and redirect
  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  // Clear user token and profile data from localStorage
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

// Instantiate an instance of the AuthService class
const authServiceInstance = new AuthService();

// Export the instance of the AuthService class
export default authServiceInstance;