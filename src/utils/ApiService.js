import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const BASE_URL = import.meta.env.VITE_APP_BASE_LIVE_URL;
const DomainName = import.meta.env.VITE_APP_DOMAIN_NAME;
const admin = import.meta.env.VITE_APP_PLATFORM_NAME_ADMIN;
const user = import.meta.env.VITE_APP_PLATFORM_NAME_USER;

// Create an Axios instance
const apiClient = axios.create({  
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'domainName': DomainName,
    'platform' : (window.location.pathname).startsWith('/admin') ? admin : user
  },
});

// Set up an interceptor to dynamically add the `Authorization` header before each request
apiClient.interceptors.request.use(
  (config) => {
    // Get the token from localStorage
    const token = localStorage.getItem('accessToken');

    if (token) {
      config.headers['Authorization'] = token;
    }
    // else {
    //   toast.info("Invalid Token. Please log in again.");
    // }

    return config;
  },
  (error) => Promise.reject(error)  
);

// Set up an interceptor to handle `401 Unauthorized` responses
apiClient.interceptors.response.use(
  (response) => response, // pass through if response is successful
  (error) => {
    // if (error.response && error.response.status === 401) {
    //   // Clear any stored authentication token, if necessary
    //   localStorage.removeItem('accessToken');
    //   // Display an error message
    //   toast.error("Unauthorized access. Redirecting to the home page.");

    //   // Redirect to home page
    //   localStorage.clear();
    //   // Or if you're using React Router's `useNavigate`, you could use it here instead
    //   // const navigate = useNavigate();
    //   // navigate('/');
    //   // Check the current path
    //   const currentPath = window.location.pathname;

    //   // Redirect based on path
    //   if (currentPath.startsWith('/admin')) {
    //     window.location.href = '/admin'; // Redirect admin users
    //   } else {
    //     window.location.href = '/'; // Redirect general users
    //   }
    //   return;
    // }

    const status = error.response ? error.response.status : null;

    if (status === 500) {
      toast.error("Network Error, please try again later.");
    }

    
    if (error.response && error.response.status === 401) {
      // Clear any stored authentication token, if necessary
      // Display an error message
      // toast.error("Unauthorized access. Redirecting to the home page.");

      // Redirect to home page
      // Or if you're using React Router's useNavigate, you could use it here instead
      // const navigate = useNavigate();
      // navigate('/');
      // Check the current path
      setTimeout(() => {
        const currentPath = window.location.pathname;
        // Redirect based on path
        if (currentPath.startsWith('/admin')) {
          window.location.href = '/admin'; // Redirect admin users
          localStorage.clear();
          localStorage.removeItem('accessToken');
        } else {
          window.location.href = '/'; // Redirect general users
          localStorage.clear();
          localStorage.removeItem('accessToken');
        }
      }, 1500);


      return;
    }

    return Promise.reject(error);
  }
);

// Define common API methods using the Axios instance
const _get = (url, config = {}) => apiClient.get(url, config);
const _delete = (url, config = {}) => apiClient.delete(url, config);
const _put = (url, data = {}, config = {}) => apiClient.put(url, data, config);
const _post = (url, data = {}, config = {}) => apiClient.post(url, data, config);
const _deleteWithBody = (url, data = {}, config = {}) => {
  return apiClient.delete(url, {
    ...config,
    data: data, // Include the data in the config
  });
};

export { _get, _delete, _put, _post, _deleteWithBody };
