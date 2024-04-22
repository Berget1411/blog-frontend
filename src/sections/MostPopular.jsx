import SmallCard from '../components/SmallCard';
import TinyCard from '../components/TinyCard';
import { usePosts } from '../context/postsContext';

const MostPopular = () => {
  const { posts } = usePosts();
  const post = posts[4];
  return (
    <div>
      <h2 className='text-2xl font-palanquin py-10 text-violet-600 font-bold  '>
        Most popular articles
      </h2>
      <div className='grid grid-cols-2 max-lg:grid-cols-1 padding-x gap-5 bg-amber-50 p-4 rounded-b-[5rem] rounded-tr-[5rem]  shadow-2xl  '>
        <SmallCard post={post} useShadow={false} className='w-100' />
        <div className='grid  gap-3'>
          {posts.slice(0, 4).map((post) => (
            <TinyCard post={post} showText={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
