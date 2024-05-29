import { UserCircleIcon, TrashIcon } from '@heroicons/react/24/solid';
import { format } from 'date-fns';
import { useSession } from '../context/sessionContext';
import axios from 'axios';
import { usePosts } from '../context/postsContext';

const UserComment = ({ comment, post }) => {
  const { currentUsername, accessToken } = useSession();
  const { fetchPosts } = usePosts();

  const deleteComment = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/comments`,

        {
          data: {
            postId: post._id,
            commentId: comment._id,
          },
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      );
      fetchPosts();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <li className='surface px-3 py-4 rounded-lg flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-5'>
      <div>
        <div className='flex items-center gap-3 '>
          <UserCircleIcon className='w-10 h-10 text-black dark:text-white' />
          <p className='p-4'>
            <span className='font-bold mr-1 dark:text-white'>
              {comment.username}
            </span>
            <span className='info-color text-xs'>
              {' '}
              {format(comment.date, 'dd MMMM yyyy')}
            </span>
          </p>
        </div>
        <p className='dark:text-white'>{comment.comment}</p>
      </div>

      {currentUsername === comment.username && (
        <div
          onClick={deleteComment}
          className='border-[3px] p-2 rounded-full border-purple-700 dark:border-purple-300 hover:border-purple-600 dark:hover:border-purple-200  transition-all'
        >
          <TrashIcon className='w-5 h-5 primary-color cursor-pointer hover:text-purple-600 dark:hover:text-purple-200 transition-all ' />
        </div>
      )}
    </li>
  );
};

export default UserComment;
