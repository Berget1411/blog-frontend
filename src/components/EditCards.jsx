import { Link } from 'react-router-dom';
import { convertString } from '../hooks/helpers';
import { TrashIcon, PencilIcon, CheckIcon } from '@heroicons/react/24/solid';
import { usePosts } from '../context/postsContext';
import { useSession } from '../context/sessionContext';
import axios from 'axios';
const EditCards = ({ post }) => {
  const { fetchPosts } = usePosts();
  const { accessToken } = useSession();

  const deleteProject = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/posts`,

        {
          data: {
            postId: post._id,
          },
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(res);
      fetchPosts();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <li className='flex surface justify-between items-center px-3 py-4 rounded-lg'>
      <div className='flex gap-5 '>
        <img src={post.image} alt='' className=' rounded-xl mb-2 h-20  ' />
        <div className=' '>
          <p className=' text-sm max-lg:text-xs bg-violet-200 inline px-4 rounded-xl font-bold'>
            {post.category}
          </p>
          <Link to={`/articles/${convertString(post.title)}`}>
            <h3 className='dark:text-white text-lg max-lg:text-sm font-bold py-1 font-palanquin hover:info-color transition-all'>
              {post.title}
            </h3>
          </Link>
        </div>
      </div>
      <div className='flex gap-4'>
        <div className='border-[3px] p-2 rounded-xl border-purple-700 dark:border-purple-300 hover:border-purple-600 dark:hover:border-purple-200  transition-all cursor-pointer'>
          <PencilIcon className='w-5 h-5 primary-color  hover:text-purple-600 dark:hover:text-purple-200 transition-all ' />
        </div>
        <div
          className='border-[3px] p-2 rounded-xl border-purple-700 dark:border-purple-300 hover:border-purple-600 dark:hover:border-purple-200  transition-all cursor-pointer '
          onClick={deleteProject}
        >
          <TrashIcon className='w-5 h-5 primary-color  hover:text-purple-600 dark:hover:text-purple-200 transition-all ' />
        </div>
      </div>
    </li>
  );
};

export default EditCards;
