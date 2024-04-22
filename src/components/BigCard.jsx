import Button from './Button';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const BigCard = ({ post }) => {
  return (
    <div className='mx-20 my-10 py-6 padding-x shadow-2xl rounded-r-[5rem] rounded-tl-[5rem] cursor-pointer bg-amber-50 '>
      <div className='flex justify-between'>
        <span className='text-lg'>{format(post.date, 'dd MMMM yyyy')}</span>
        <span className=' bg-violet-200 inline px-5 py-1 rounded-xl font-bold text-lg'>
          {post.category}
        </span>
      </div>
      <div className='flex gap-5 max-lg:flex-col max-lg:pt-4'>
        <img className='rounded-xl' src={post.image} alt={post.title} />
        <div>
          <h3 className='text-2xl font-bold py-4 font-palanquin'>
            {post.title}
          </h3>
          <p className='text-slate-gray text-md pb-5 font-montserrat'>
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
