import SmallCard from '../components/SmallCard';
import TinyCard from '../components/TinyCard';
import { usePosts } from '../context/postsContext';

const MostPopular = () => {
  const { posts } = usePosts();
  const post = posts.find((post) => post.is_published);
  return (
    <div>
      <h2 className='text-2xl font-palanquin py-10 secondary-color font-bold '>
        Most popular articles
      </h2>
      <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-6 py-8 padding-r  rounded-lg'>
        <SmallCard post={post} useShadow={false} className='w-100' />
        <div className='grid gap-3'>
          {posts
            .filter((post) => post.is_published)
            .slice(1, 4)
            .map((post) => (
              <TinyCard post={post} showText={false} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
