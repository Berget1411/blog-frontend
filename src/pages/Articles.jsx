import Filter from '../sections/articles/Filter';
import { usePosts } from '../context/postsContext';
import BigCard from '../components/BigCard';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Articles = () => {
  const { posts } = usePosts();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [date, setDate] = useState('latest');

  const sortedPosts = () => {
    if (date === 'latest') {
      return posts.toSorted((a, b) => new Date(b.date) - new Date(a.date));
    } else {
      return posts.toSorted((a, b) => new Date(a.date) - new Date(b.date));
    }
  };

  const filteredPosts = sortedPosts().filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === 'all' || post.category === category)
  );

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  return (
    <div className='pt-40 padding-x max-container'>
      <Filter
        posts={posts}
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        date={date}
        setDate={setDate}
      />
      {filteredPosts.length > 0 ? (
        <motion.ul
          className=' grid-cols-2'
          variants={container}
          initial='hidden'
          animate='visible'
        >
          {filteredPosts.map((post) => (
            <motion.li key={post._id} variants={item}>
              <BigCard post={post} />
            </motion.li>
          ))}
        </motion.ul>
      ) : (
        <p className='info-color text-xl text-center '>No matching posts</p>
      )}
    </div>
  );
};

export default Articles;
