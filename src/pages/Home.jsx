import Latest from '../sections/Latest';
import Hero from '../sections/Hero';
import MostPopular from '../sections/MostPopular';
import Subscribe from '../sections/Subscribe';

const Home = () => {
  return (
    <div className='pt-40 pb-10 padding-x  z-20 w-full  '>
      <Hero />
      <Latest />
      <MostPopular />
      <Subscribe />
    </div>
  );
};

export default Home;
