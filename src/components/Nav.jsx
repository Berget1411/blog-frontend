import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { twJoin } from 'tailwind-merge';
import useWindowDimensions from '../hooks/useWindowDimensions';
import HamburgerContent from './HamburgerContent';
import Button from './Button';

const Nav = ({ location }) => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    width >= 768 && setHamburgerActive(false);
  }, [width]);

  return (
    <header className='padding-x py-8 z-20 w-full absolute bg-amber-50 shadow-md'>
      <nav className='flex justify-between items-center max-container flex-wrap'>
        <Link to='/' className='group transition-all'>
          <h1 className='text-3xl font-bold font-palanquin'>
            Blog
            <span className='text-violet-600 group-hover:text-violet-500 transition-all'>
              API
            </span>
          </h1>
        </Link>
        <ul className='flex-1 flex justify-center items-center gap-16 max-md:hidden'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.location}
                className={twJoin(
                  'text-xl font-montserrat transition-all',
                  link.location === location
                    ? 'text-violet-600 font-bold underline underline-offset-4 decoration-2'
                    : 'text-slate-gray hover:text-slate-400'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex gap-7 '>
          <Button>
            <Link>Sign in</Link>
          </Button>

          <button
            onClick={() =>
              hamburgerActive === false
                ? setHamburgerActive(true)
                : setHamburgerActive(false)
            }
            className='group flex cursor-pointer items-center justify-center rounded-3xl bg-white p-2 md:hidden'
          >
            <div className='space-y-2'>
              <span className='block h-1 w-8 origin-center rounded-full bg-slate-500 transition-transform ease-in-out group-active:translate-y-1.5 group-active:rotate-45'></span>
              <span className='block h-1 w-8 origin-center rounded-full bg-violet-600 transition-transform ease-in-out group-active:w-8 group-active:-translate-y-1.5 group-active:-rotate-45'></span>
            </div>
          </button>
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
