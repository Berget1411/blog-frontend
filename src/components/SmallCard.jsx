import { Link } from 'react-router-dom';
import noImage from '../assets/images/no_image.png';
import { twJoin } from 'tailwind-merge';
import { convertString } from '../hooks/helpers';

const SmallCard = ({ post, useShadow }) => {
  return (
    <Link
      to={`/articles/${convertString(post.title)}`}
      className={twJoin(
        'surface px-6 py-8 rounded-xl cursor-pointer  hover:bg-[rgba(255,255,255,0.1)] transition-all',
        useShadow && 'shadow-2xl'
      )}
    >
      <img
        src={post.image || noImage}
        alt=''
        className=' rounded-xl mb-2 w-full'
      />

      <p className=' secondary-bg inline px-4 rounded-xl font-bold text-sm max-sm:hidden'>
        {post.category}
      </p>

      <h3 className='dark:text-white text-xl font-bold py-1 font-palanquin'>
        {post.title}
      </h3>
      <p className='info-color text-sm pb-5 font-montserrat'>
        {post.text.slice(0, 50)}
      </p>
    </Link>
  );
};

export default SmallCard;
