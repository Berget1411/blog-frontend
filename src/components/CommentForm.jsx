import { useState } from 'react';
import Button from '../components/Button';
import { useSession } from '../context/sessionContext';
import axios from 'axios';
import { usePosts } from '../context/postsContext';

const CommentForm = ({ post }) => {
  const { currentUsername, accessToken } = useSession();
  const { fetchPosts } = usePosts();
  const [comment, setComment] = useState('');

  const postComment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:3000/comments`,
        {
          comment,
          username: currentUsername,
          postId: post._id,
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
  return (
    <form action='POST' onSubmit={postComment} className='mt-4'>
      <textarea
        placeholder='Write a comment...'
        className='w-full h-44 surface info-color p-4 rounded-lg '
        onChange={(e) => setComment(e.target.value)}
        disabled={!accessToken}
      ></textarea>
      <p className='text-slate-500 dark:text-slate-300  text-end my-4'>
        {400 - comment.length} letters remaining
      </p>
      <Button type={'submit'} disabled={!accessToken}>
        Post a comment
      </Button>
    </form>
  );
};

export default CommentForm;
