import { usePosts } from '../context/postsContext';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const { error, loading } = usePosts();

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>loading...</p>;

  return (
    <>
      <nav>Title</nav>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
