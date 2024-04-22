import { usePosts } from '../context/postsContext';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

const Layout = () => {
  const { error, loading } = usePosts();
  const location = useLocation();

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>loading...</p>;

  return (
    <>
      <Nav location={location.pathname} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
