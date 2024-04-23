import { Link } from 'react-router-dom';

const TinyCard = ({ post }) => {
  return (
    <Link
      to={`/articles/${post._id}`}
      className='flex gap-5 surface px-3 py-4 rounded-lg hover:bg-[rgba(255,255,255,0.1)]  transition-all'
    >
      <img src={post.image} alt='' className=' rounded-xl mb-2 h-20  ' />
      <div className=' '>
        <p className=' text-sm max-lg:text-xs bg-violet-200 inline px-4 rounded-xl font-bold'>
          {post.category}
        </p>
        <h3 className='dark:text-white text-lg max-lg:text-sm font-bold py-1 font-palanquin'>
          {post.title}
        </h3>
      </div>
    </Link>
  );
};

export default TinyCard;
