import { usePosts } from '../context/postsContext';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import { useState } from 'react';
import { twJoin } from 'tailwind-merge';

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const { error, loading } = usePosts();
  const location = useLocation();

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>loading...</p>;

  return (
    <div className={darkMode && 'dark'}>
      <div className='background'>
        {' '}
        <Nav
          location={location.pathname}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
        />
        <main className='min-h-[calc(100vh-319px)]'>
          <Outlet />
        </main>
        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Layout;
