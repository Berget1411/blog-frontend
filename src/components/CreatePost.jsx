import Button from '../components/Button';
import { useState } from 'react';
import { useSession } from '../context/sessionContext';
import axios from 'axios';
import { usePosts } from '../context/postsContext';

const CreatePost = () => {
  const { accessToken } = useSession();
  const { fetchPosts } = usePosts();
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const [category, setCategory] = useState();
  const [image, setImage] = useState();

  const submitPost = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:3000/posts`,
        {
          title,
          category,
          text,
          image,
        },
        {
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
    <div className=' small-container surface px-10 py-12 rounded-lg'>
      <h2 className='dark:text-white text-2xl font-bold mb-6'>
        Create a new post
      </h2>
      <form className=' grid gap-6' onSubmit={submitPost}>
        <div className='relative'>
          <input
            type='text'
            id='username'
            name='username'
            placeholder=''
            className='peer input w-full'
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor='username' className='input-label'>
            Title
          </label>
        </div>
        <div className='relative'>
          <input
            type='password'
            id='password'
            name='password'
            placeholder=''
            className='peer input w-full'
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor='password' className='input-label'>
            Category
          </label>
        </div>
        <div className='relative'>
          <textarea
            name='text'
            id='text'
            placeholder=''
            className='peer input w-full h-[80px!important]'
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <label htmlFor='text' className='input-label'>
            Text
          </label>
        </div>
        <div className='relative'>
          <input
            id='image'
            name='image'
            placeholder=''
            className='peer input w-full'
            onChange={(e) => setImage(e.target.value)}
          />
          <label htmlFor='image' className='input-label'>
            Image URL
          </label>
        </div>
        <Button full={true} type='submit'>
          Create post
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;
