import { usePosts } from '../context/postsContext';
import { useParams } from 'react-router-dom';
import profileImage from '../assets/images/profile.png';
import { format } from 'date-fns';
import { convertString } from '../hooks/helpers';
import { Link, Navigate } from 'react-router-dom';
import UserComment from '../components/UserComment';
import CommentForm from '../components/CommentForm';
import { useSession } from '../context/sessionContext';

const ArticlePage = () => {
  const { accessToken } = useSession();

  const { posts } = usePosts();
  const { postTitle } = useParams();
  const [post] = posts.filter(
    (post) => convertString(post.title) === postTitle
  );
  const sortedComments = post.comments.toSorted(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return post.is_published ? (
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
        <h3 className='mb-8 text-2xl font-bold dark:text-white'>
          Discussion ({post.comments.length})
        </h3>
        {!accessToken && (
          <p className='py-3 text-center bg-rose-300 rounded-lg'>
            <Link to='/sign-in' className='font-bold underline'>
              Sign in{' '}
            </Link>
            to post a comment
          </p>
        )}
        <CommentForm post={post} />
      </div>
      {sortedComments.length ? (
        <ul className='mt-10 flex flex-col gap-5 px-24 max-sm:padding-x'>
          {sortedComments.map((comment) => (
            <UserComment comment={comment} post={post} key={comment._id} />
          ))}
        </ul>
      ) : (
        <p className=' py-12 text-center text-xl font-bold secondary-color'>
          Be the first to comment.
        </p>
      )}
    </section>
  ) : (
    <Navigate to='/' />
  );
};

export default ArticlePage;
