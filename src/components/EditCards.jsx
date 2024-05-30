import { Link } from 'react-router-dom';
import { convertString } from '../hooks/helpers';
import {
  TrashIcon,
  PencilIcon,
  CheckIcon,
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/24/solid';
import { usePosts } from '../context/postsContext';
import { useSession } from '../context/sessionContext';
import axios from 'axios';
import { useState } from 'react';
import { twJoin } from 'tailwind-merge';
const EditCards = ({ post }) => {
  const { fetchPosts } = usePosts();
  const { accessToken } = useSession();
  const [editActive, setEditActive] = useState(false);
  const [hideProject, setHideProject] = useState(post.is_published);

  const [title, setTitle] = useState(post.title);
  const [text, setText] = useState(post.text);
  const [category, setCategory] = useState(post.category);
  const [image, setImage] = useState(post.image);

  const hidePost = async () => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/posts`,
        {
          postId: post._id,
          title,
          category,
          text,
          image,
          isPublished: !hideProject,
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

  const submitEdit = async () => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/posts`,
        {
          postId: post._id,
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

  const deleteProject = async () => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_URL}/posts`,

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
    <>
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
          <div
            className='border-[3px] p-2 rounded-xl border-purple-700 dark:border-purple-300 hover:border-purple-600 dark:hover:border-purple-200  transition-all cursor-pointer '
            onClick={() => {
              if (hideProject) {
                hidePost();
                setHideProject(false);
              } else {
                hidePost();
                setHideProject(true);
              }
            }}
          >
            {!hideProject ? (
              <EyeSlashIcon className='w-5 h-5 primary-color  hover:text-purple-600 dark:hover:text-purple-200 transition-all ' />
            ) : (
              <EyeIcon className='w-5 h-5 primary-color  hover:text-purple-600 dark:hover:text-purple-200 transition-all ' />
            )}
          </div>
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
            className='border-[3px] p-2 rounded-xl border-purple-700 dark:border-purple-300 hover:border-purple-600 dark:hover:border-purple-200  transition-all cursor-pointer '
            onClick={deleteProject}
          >
            <TrashIcon className='w-5 h-5 primary-color  hover:text-purple-600 dark:hover:text-purple-200 transition-all ' />
          </div>
        </div>
      </li>
      {editActive && (
        <div className='flex surface justify-center items-center px-3 py-4 rounded-lg'>
          <form className=' grid gap-6'>
            <div className='flex gap-10 justify-between'>
              <div className='relative'>
                <input
                  id='editTitle'
                  name='editTitle'
                  placeholder=''
                  value={title}
                  className='peer input w-full'
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor='editTitle' className='input-label'>
                  Title
                </label>
              </div>
              <div className='relative'>
                <input
                  id='editCategory'
                  name='editCategory'
                  value={category}
                  placeholder=''
                  className='peer input w-full'
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label htmlFor='editCategory' className='input-label'>
                  Category
                </label>
              </div>
              <div className='relative'>
                <input
                  id='editImage'
                  name='editImage'
                  placeholder=''
                  className='peer input w-full'
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
                <label htmlFor='image' className='input-label'>
                  Image URL
                </label>
              </div>
            </div>
            <div className='relative'>
              <textarea
                name='editText'
                id='editText'
                placeholder=''
                value={text}
                className='peer input w-full h-[80px!important]'
                onChange={(e) => setText(e.target.value)}
              ></textarea>
              <label htmlFor='editText' className='input-label'>
                Text
              </label>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default EditCards;
