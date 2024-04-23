import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { AnimatePresence, motion } from 'framer-motion';
import { twJoin } from 'tailwind-merge';
import { XMarkIcon } from '@heroicons/react/24/solid';

const HamburgerContent = ({
  location,
  hamburgerActive,
  setHamburgerActive,
}) => {
  return (
    <AnimatePresence>
      {hamburgerActive && (
        <>
          <motion.div
            key={'hamburgerContent'}
            initial={{ x: '100%' }}
            animate={{ x: '0' }}
            exit={{ x: '100%' }}
            transition={{ bounce: false }}
            className='z-50 fixed top-0 right-0 background h-full w-full max-w-xs py-2 px-5'
          >
            <div className='flex justify-between items-center py-6 mb-8 border-b-2'>
              <h1 className='dark:text-white text-2xl font-bold font-palanquin'>
                Blog<span className='primary-color'>API</span>
              </h1>

              <XMarkIcon
                className='w-8 h-8 primary-color rounded-full md:hidden cursor-pointer'
                onClick={() =>
                  hamburgerActive === false
                    ? setHamburgerActive(true)
                    : setHamburgerActive(false)
                }
              />
            </div>
            <ul className='flex flex-col justify-center  gap-16 '>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.location}
                    className={twJoin(
                      'text-xl font-montserrat transition-all',
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
          </motion.div>
          <motion.div
            key={'blur'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='z-40 fixed top-0 right-0 w-full min-h-screen bg-black/70 backdrop-blur-sm'
            onClick={() => setHamburgerActive(false)}
          ></motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HamburgerContent;
