import { usePosts } from '../context/postsContext';
import SmallCard from '../components/SmallCard';
import DisplayArticle from './DisplayArticle';

const Latest = () => {
  const { posts } = usePosts();
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <div>
      <h2 className='text-2xl font-palanquin pt-10 text-violet-600 font-bold'>
        Latest articles
      </h2>
      <DisplayArticle post={sortedPosts[0]} />
      <div className='grid grid-cols-3 gap-4 padding-x py-6 group max-lg:grid-cols-2 bg-amber-50 shadow-2xl rounded-r-[5rem] rounded-bl-[5rem]'>
        {sortedPosts.slice(1, 4).map((post) => (
          <SmallCard post={post} key={post._id} useShadow={false} />
        ))}
      </div>
    </div>
  );
};

export default Latest;
