export const logout = () => {
 
  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('userToken');
  window.location.href = '/login';
};

