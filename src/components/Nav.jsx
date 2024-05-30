import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { twJoin } from 'tailwind-merge';
import useWindowDimensions from '../hooks/useWindowDimensions';
import HamburgerContent from './HamburgerContent';
import Button from './Button';
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid';
import { useSession } from '../context/sessionContext';

const Nav = ({ location, toggleDarkMode, darkMode }) => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const { width } = useWindowDimensions();
  const { admin, accessToken, endSession } = useSession();

  useEffect(() => {
    width >= 768 && setHamburgerActive(false);
  }, [width]);

  return (
    <header className='padding-x pt-3 z-20 w-full absolute md:border-b-2 '>
      <nav className='flex justify-between items-center flex-wrap py-3 max-md:border-b-2 '>
        <Link to='/' className=' transition-all'>
          <h1 className='text-3xl font-bold font-palanquin dark:text-white'>
            Blog
            <span className='primary-color '>API</span>
          </h1>
        </Link>
        <ul className='flex-1 flex justify-center items-center gap-12 max-md:hidden'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.location}
                className={twJoin(
                  'text-xl font-montserrat transition-text',
                  link.location === location
                    ? 'primary-color font-bold underline underline-offset-4 decoration-2'
                    : 'text-slate-400 hover:text-slate-300 dark:slate-300 dark:hover-slate-200'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex items-center gap-4  '>
          {admin && (
            <Link to={'/edit'}>
              <PencilSquareIcon className='h-8 w-8 primary-color' />
            </Link>
          )}
          {!accessToken ? (
            <Button>
              <Link to='/sign-in'>Sign in</Link>
            </Button>
          ) : (
            <Button event={endSession}>Sign out</Button>
          )}
          <button onClick={toggleDarkMode}>
            {darkMode ? (
              <MoonIcon className='h-8 w-8 secondary-color' />
            ) : (
              <SunIcon className='h-8 w-8 secondary-color' />
            )}
          </button>

          <Bars3Icon
            className='w-8 h-8 primary-color rounded-full md:hidden cursor-pointer'
            onClick={() =>
              hamburgerActive === false
                ? setHamburgerActive(true)
                : setHamburgerActive(false)
            }
          />
        </div>
        <HamburgerContent
          location={location}
          setHamburgerActive={setHamburgerActive}
          hamburgerActive={hamburgerActive}
        />
      </nav>
    </header>
  );
};

export default Nav;
