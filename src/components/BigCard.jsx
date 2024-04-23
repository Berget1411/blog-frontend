import Button from './Button';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import noImage from '../assets/images/no_image.png';

const BigCard = ({ post }) => {
  return (
    <div className='surface my-10 py-6 padding-x rounded-lg'>
      <div className='flex justify-between'>
        <span className='dark:text-white text-lg'>
          {format(post.date, 'dd MMMM yyyy')}
        </span>
        <span className='secondary-bg inline px-5 py-1 rounded-xl font-bold text-lg'>
          {post.category}
        </span>
      </div>
      <div className='flex gap-5 max-lg:flex-col max-lg:pt-4 object-contain'>
        <div>
          <img
            className='rounded-xl'
            src={post.image || noImage}
            alt={post.title}
            width={480}
          />
        </div>
        <div>
          <h3 className='dark:text-white text-2xl font-bold py-4 font-palanquin'>
            {post.title}
          </h3>
          <p className='info-color text-md pb-5 font-montserrat'>
            {post.text.slice(0, 150)}
          </p>
          <Link to={`/articles/${post._id}`}>
            <Button>Read Article</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
