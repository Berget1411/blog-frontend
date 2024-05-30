import Button from '../components/Button';
import { useState } from 'react';
import { useSession } from '../context/sessionContext';
import axios from 'axios';
import { usePosts } from '../context/postsContext';
import CreatePost from '../components/CreatePost';
import EditCards from '../components/EditCards';

const Edit = () => {
  const { posts } = usePosts();
  return (
    <section className=' padding-x pt-40'>
      <CreatePost />
      <ul className='medium-container grid gap-5 mt-10'>
        {posts.map((post) => (
          <li key={post._id} className=' grid  gap-10  '>
            <EditCards post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Edit;
