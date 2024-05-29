import { createContext, useContext, useEffect, useState } from 'react';

const PostsContext = createContext();
export const usePosts = () => useContext(PostsContext);

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPosts = () => {
    fetch('http://localhost:3000/posts')
      .then((res) => {
        if (res.status >= 400) {
          throw new Error('Server Error');
        }
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const value = { posts, error, loading, fetchPosts };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};

export default PostsProvider;
