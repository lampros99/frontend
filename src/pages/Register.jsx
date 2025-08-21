import { useState, useEffect } from 'react';
import { registerUser } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Register | Movies App";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(email, password);
      if (res.error) {
        alert(res.error);
      } else {
        alert('Registration successful! Redirecting to login...');
        navigate('/login');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-8 rounded-2xl shadow-lg w-full max-w-sm bg-white"
      >
        <h1 className="text-2xl font-semibold text-center text-indigo-600 mb-6">
          Create Account
        </h1>
           <input
           type="text"
           placeholder="Name"
           value={name}
           onChange={e => setName(e.target.value)}
           required
           className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
         />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Register
        </button>
        <p className="text-center text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-indigo-600 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;
