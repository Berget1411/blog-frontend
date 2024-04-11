import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { AnimatePresence, motion } from 'framer-motion';
import { twJoin } from 'tailwind-merge';

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
            className='z-50 fixed top-0 right-0 bg-white h-full w-full max-w-xs py-2 px-5'
          >
            <div className='flex justify-between items-center py-3 mb-8 border-b-[3px] border-slate'>
              <h1 className='text-2xl font-bold font-palanquin'>
                Blog<span className='text-violet-600'>API</span>
              </h1>
              <button
                onClick={() =>
                  hamburgerActive === false
                    ? setHamburgerActive(true)
                    : setHamburgerActive(false)
                }
                className='flex cursor-pointer items-center justify-center rounded-3xl bg-white p-2 md:hidden'
              >
                <div className='space-y-2'>
                  <span className='block h-1 w-7 origin-center rounded-full bg-slate-500 transition-transform ease-in-out translate-y-1.5 rotate-45'></span>
                  <span className='block h-1 w-7 origin-center rounded-full bg-violet-600 transition-transform ease-in-out  -translate-y-1.5 -rotate-45'></span>
                </div>
              </button>
            </div>
            <ul className='flex flex-col justify-center  gap-16 '>
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
