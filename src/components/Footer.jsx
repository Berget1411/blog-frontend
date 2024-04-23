import { footerText } from '../constants';
import { Link } from 'react-router-dom';
import gitHub from '../assets/images/github.svg';

const Footer = () => {
  return (
    <footer className='padding-x pt-14 '>
      <div className='flex justify-center gap-10 border-b-2 pb-14 '>
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

      <Link to='/' className=' '>
        <h1 className='dark:text-white text-3xl font-bold font-palanquin max-md: pt-8 pb-16'>
          Blog
          <span className='primary-color '>API</span>
        </h1>
      </Link>
    </footer>
  );
};

export default Footer;
