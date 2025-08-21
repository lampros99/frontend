import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../../style.css';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  

  useEffect(() => {
    document.title = "Login | Movies App";
  }, [])

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (email === 'test@example.com' && password === '123') {
        login(email);

        console.log('Login successful!');
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/');
      } else {
        setError('Invalid email or password');
        setLoading(false);
      }
    }, 1000);
  };

  const handleGoogleLogin = () => {

    localStorage.setItem('isAuthenticated', 'true');
    navigate('/');
    console.log('Google login successful!');
  };

  return ( 
    <div className="home min-h-screen flex p-20 items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="flex flex-col mb-auto gap-4  p-8 rounded-2xl shadow-lg w-full m-full max-w-sm ">
         <h1 className="text-2xl font-semibold text-center text-indigo-600 mb-6">
          Movies App
         </h1>
        <input 
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input 
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button 
          type="submit" 
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      

      {error && <p className="text-center text-red-600">{error}</p>}

      <div className="flex items-center justify-center mb-4">
        <span className="text-gray-500">or</span>
      </div>

      <button 
        onClick={handleGoogleLogin} 
        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition w-full"
      >
        Login with Google
      </button>
      <p className="text-center mt-4 text-gray-500">
        Don't have an account?{' '}
       <Link 
         to="/register" 
         className="text-indigo-600 hover:text-indigo-800 font-semibold"
       >
        Sign up here
     </Link>
      </p>
    </form>
    </div>
  );
};

export default Login;
