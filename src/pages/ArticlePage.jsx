import { usePosts } from '../context/postsContext';
import { useParams } from 'react-router-dom';
import profileImage from '../assets/images/profile.png';
import { format } from 'date-fns';
import { convertString } from '../hooks/helpers';
import Button from '../components/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserComment from '../components/UserComment';

const ArticlePage = () => {
  const [comment, setComment] = useState('');
  const { posts } = usePosts();
  const { postTitle } = useParams();
  const [post] = posts.filter(
    (post) => convertString(post.title) === postTitle
  );

  return (
    <section className='pt-40 pb-10 padding-x medium-container font-palanquin'>
      <h2 className=' text-4xl font-bold dark:text-white pb-10 '>
        {post.title}
      </h2>
      <div className='flex justify-between items-center pb-8 '>
        <div className='flex gap-4 items-center'>
          <img
            src={profileImage}
            alt='profile'
            width={55}
            height={55}
            className='rounded-full'
          />
          <div className='dark:text-white text-lg'>
            <p>Ludvig Bergström</p>
            <p>{format(post.date, 'eeee dd MMMM yyyy')}</p>
          </div>
        </div>
        <div className='dark:text-white text-lg'>
          <span>{Math.ceil(post.text.length / 225)} min read &#x2022;</span>
          <span> {post.likes.length} likes</span>
        </div>
      </div>
      <img
        src={post.image}
        alt={post.title}
        className='rounded-xl w-full pb-8'
      />
      <div className='border-b-2 border-dotted pb-10'>
        <p className='text-slate-500 dark:text-slate-300 text-lg font-montserrat leading-normal'>
          {post.text}
        </p>
      </div>
      <div className='padding-x'>
        <p className='secondary-color font-bold mt-6 mb-14'>
          # {post.category}
        </p>
        <h3 className='text-2xl font-bold dark:text-white'>
          Discussion ({post.comments.length})
        </h3>
        <p className='py-3 mt-8 mb-4 text-center bg-rose-300 rounded-lg'>
          <Link to='/sign-in' className='font-bold underline'>
            Sign in{' '}
          </Link>
          to post a comment
        </p>
        <form action=''>
          <textarea
            placeholder='Write a comment...'
            className='w-full h-44 surface info-color p-4 rounded-lg '
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <p className='text-slate-500 dark:text-slate-300  text-end my-4'>
            {400 - comment.length} letters remaining
          </p>
          <Button>Post a comment</Button>
        </form>
      </div>
      <ul className='mt-10 flex flex-col gap-5 px-24ghb'>
        {post.comments.map((comment) => (
          <UserComment comment={comment} />
        ))}
      </ul>
    </section>
  );
};

export default ArticlePage;
