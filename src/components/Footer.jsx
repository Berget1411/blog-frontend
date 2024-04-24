import { footerText } from '../constants';
import { Link } from 'react-router-dom';
import gitHub from '../assets/images/github.svg';

const Footer = () => {
  return (
    <footer className='padding-x border-t-2 '>
      <div className='max-container'>
        <Link to='/' className=' '>
          <h1 className='dark:text-white text-3xl font-bold font-palanquin max-md: pt-8 pb-4'>
            Blog
            <span className='primary-color '>API</span>
          </h1>
        </Link>
        <div className='flex justify-center gap-10 pb-14 '>
          {footerText.map((el) => (
            <div>
              <h3 className='dark:text-white text-xl font-bold pb-2'>
                {el.title}
              </h3>
              {el.links.map((link) => (
                <p className='info-color py-1'>{link}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
