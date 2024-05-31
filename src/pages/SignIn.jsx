import Button from '../components/Button';
import { useState } from 'react';
import axios from 'axios';
import { useSession } from '../context/sessionContext';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [error, setError] = useState();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { startSession } = useSession();

  const [loginStatus, setLoginStatus] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
        username,
        password,
      });
      if (!res.data.auth) {
        setLoginStatus(false);
      } else {
        startSession(
          res.data.accessToken,
          res.data.result.username,
          res.data.result.is_admin
        );
        setLoginStatus(true);
      }
    } catch (err) {
      setError(err);
    }
  };

  return (
    <section className=' padding-x pt-40'>
      <div className=' small-container surface px-10 py-12 rounded-lg'>
        <h2 className='dark:text-white text-2xl font-bold mb-6'>
          Sign in to your account
        </h2>
        <form onSubmit={handleSubmit} className=' grid gap-6'>
          <div className='relative'>
            <input
              type='text'
              id='username'
              name='username'
              placeholder=''
              className='peer input w-full'
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor='username' className='input-label'>
              Username
            </label>
          </div>
          <div className='relative'>
            <input
              type='password'
              id='password'
              name='password'
              placeholder=''
              className='peer input w-full'
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor='password' className='input-label'>
              Password
            </label>
          </div>
          <Button full={true} type='submit'>
            Sign In
          </Button>
          <p className='info-color'>
            Don't have an account?{' '}
            <Link
              to={'/sign-up'}
              className='font-bold primary-color hover:text-purple-600 dark:hover:text-purple-200 transition-all'
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
