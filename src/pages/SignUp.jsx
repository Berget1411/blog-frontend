import Button from '../components/Button';
import { redirect, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const navigate = useNavigate();
  const [registered, setRegistered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/register', {
        username,
        password,
      });
      navigate('/sign-in');
    } catch (err) {
      setError(err);
    }
  };
  return (
    <section className=' padding-x pt-40'>
      <div className=' small-container surface px-10 py-12 rounded-lg'>
        <h2 className='dark:text-white text-2xl font-bold mb-6'>
          Create an account
        </h2>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className=' grid gap-6'
        >
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
            Sign up
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
