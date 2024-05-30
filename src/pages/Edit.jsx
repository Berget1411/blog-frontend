import Button from '../components/Button';
import { useState } from 'react';
import { useSession } from '../context/sessionContext';
import axios from 'axios';
import { usePosts } from '../context/postsContext';
import CreatePost from '../components/CreatePost';

const Edit = () => {
  return (
    <section className=' padding-x pt-40'>
      <CreatePost />
    </section>
  );
};

export default Edit;
