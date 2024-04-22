import { usePosts } from '../context/postsContext';
import Hero from '../sections/Hero';
import Latest from '../sections/Latest';

import MostPopular from '../sections/MostPopular';
import Subscribe from '../sections/Subscribe';
import { format, parseISO } from 'date-fns';

const Home = () => {
  const { posts } = usePosts();
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
