import { Link } from 'react-router-dom';
import noImage from '../assets/images/no_image.png';
import { twJoin } from 'tailwind-merge';

const SmallCard = ({ post, useShadow }) => {
  return (
    <Link
      to={`/articles/${post._id}`}
      className={twJoin(
        'p-2 rounded-xl cursor-pointer bg-amber-50 hover:bg-amber-100 transition-all',
        useShadow && 'shadow-2xl'
      )}
    >
      <img
        src={post.image || noImage}
        alt=''
        className=' rounded-xl mb-2 w-full'
      />

      <p className=' bg-violet-200 inline px-4 rounded-xl font-bold text-sm'>
        {post.category}
      </p>

      <h3 className='text-xl font-bold py-1 font-palanquin'>{post.title}</h3>
      <p className='text-slate-gray text-sm pb-5 font-montserrat'>
        {post.text.slice(0, 50)}
      </p>
    </Link>
  );
};

export default SmallCard;
