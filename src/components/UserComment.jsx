import { UserCircleIcon } from '@heroicons/react/24/solid';
import { format } from 'date-fns';

const UserComment = ({ comment }) => {
  return (
    <li className='surface px-3 py-4 rounded-lg'>
      <div className='flex items-center gap-3'>
        <UserCircleIcon className='w-10 h-10 text-black' />
        <p className='p-4'>
          <span className='font-bold mr-1'>{comment.username}</span>
          <span className='info-color text-xs'>
            {' '}
            {format(comment.date, 'dd MMMM yyyy')}
          </span>
        </p>
      </div>
      <p>{comment.comment}</p>
    </li>
  );
};

export default UserComment;
