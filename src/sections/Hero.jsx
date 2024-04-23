import Button from '../components/Button';
import { Link } from 'react-router-dom';

import heroImage from '../assets/images/hero-image.jpg';

const Hero = () => {
  return (
    <div className='flex justify-between items-center max-container max-md:flex-col-reverse gap-10 surface rounded-r-[5rem] rounded-bl-[5rem] px-8 py-10  '>
      <div>
        <h1 className='text-slate-900 dark:text-white font-palanquin text-4xl'>
          Stay up to date with tech{' '}
        </h1>
        <p className='info-color text-lg py-4'>
          In this blog you will discover latest news on everything happening in
          the tech industry, with just a few clicks
        </p>
        <Button>
          <Link to='/articles'>Start reading</Link>
        </Button>
      </div>
      <div>
        <img
          src={heroImage}
          alt='hero image'
          className='rounded-r-[5rem] rounded-tl-[5rem] '
        />
      </div>
    </div>
  );
};

export default Hero;
