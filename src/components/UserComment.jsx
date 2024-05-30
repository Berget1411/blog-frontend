import {
  UserCircleIcon,
  TrashIcon,
  PencilIcon,
  CheckIcon,
} from '@heroicons/react/24/solid';
import { format } from 'date-fns';
import { useSession } from '../context/sessionContext';
import axios from 'axios';
import { usePosts } from '../context/postsContext';
import { useState } from 'react';
import { twJoin } from 'tailwind-merge';

const UserComment = ({ comment, post }) => {
  const { currentUsername, accessToken } = useSession();
  const { fetchPosts } = usePosts();
  const [editActive, setEditActive] = useState(false);
  const [edit, setEdit] = useState(comment.comment);

  const submitEdit = async () => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/comments`,
        {
          updatedComment: edit,
          postId: post._id,
          commentId: comment._id,
        },
        {
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

  const deleteComment = async () => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_URL}/comments`,

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
        {editActive ? (
          <textarea
            className='border-[3px] border-black rounded-lg'
            onChange={(e) => setEdit(e.target.value)}
          >
            {edit}
          </textarea>
        ) : (
          <p className='dark:text-white'>{comment.comment}</p>
        )}
      </div>

      {currentUsername === comment.username && (
        <div className='flex gap-4'>
          <div
            className={twJoin(
              'border-[3px] p-2 rounded-xl border-purple-700 dark:border-purple-300 hover:border-purple-600 dark:hover:border-purple-200 transition-all cursor-pointer',
              editActive && 'border-teal-400 hover:border-teal-300 '
            )}
            onClick={() => {
              if (editActive) {
                submitEdit();
                setEditActive(false);
              } else {
                setEditActive(true);
              }
            }}
          >
            {editActive ? (
              <CheckIcon className='w-5 h-5 secondary-color hover:border-teal-300  ' />
            ) : (
              <PencilIcon className='w-5 h-5 primary-color  hover:text-purple-600 dark:hover:text-purple-200 transition-all ' />
            )}
          </div>
          <div
            onClick={deleteComment}
            className='border-[3px] p-2 rounded-xl border-purple-700 dark:border-purple-300 hover:border-purple-600 dark:hover:border-purple-200  transition-all cursor-pointer'
          >
            <TrashIcon className='w-5 h-5 primary-color  hover:text-purple-600 dark:hover:text-purple-200 transition-all ' />
          </div>
        </div>
      )}
    </li>
  );
};

export default UserComment;
