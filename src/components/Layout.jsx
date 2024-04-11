import { Outlet } from 'react-router-dom';

const Layout = () => {
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
