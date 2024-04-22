import Button from '../components/Button';
import { Link } from 'react-router-dom';

import heroImage from '../assets/images/hero-image.jpg';

const Hero = () => {
  return (
    <div className='flex justify-between items-center gap-10 pl-6 max-container max-md:flex-col-reverse bg-amber-50 rounded-r-[5rem] rounded-bl-[5rem] shadow-2xl  '>
      <div>
        <h1 className='text-4xl font-palanquin '>Stay up to date with tech </h1>
        <p className='text-slate-gray text-lg py-4'>
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
