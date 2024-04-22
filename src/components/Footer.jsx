import { footerText } from '../constants';
import { Link } from 'react-router-dom';
import gitHub from '../assets/images/github.svg';

const Footer = () => {
  return (
    <footer className='padding-x bg-amber-50 '>
      <Link to='/' className='group transition-all'>
        <h1 className='text-3xl font-bold font-palanquin max-md: mb-5'>
          Blog
          <span className='text-violet-600 group-hover:text-violet-500 transition-all'>
            API
          </span>
        </h1>
      </Link>
      <div className='flex justify-center gap-10'>
        {footerText.map((el) => (
          <div>
            <h3 className='text-xl font-bold pb-2'>{el.title}</h3>
            {el.links.map((link) => (
              <p className='py-1'>{link}</p>
            ))}
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center gap-10 pt-10 pb-6'>
        <a href='https://github.com/Berget1411/blog-frontend'>
          <img src={gitHub} alt='' className='w-7' />
        </a>
        <p>
          © 2024 Site developed as part of one of the final lessons for The Odin
          Project
        </p>
      </div>
    </footer>
  );
};

export default Footer;
