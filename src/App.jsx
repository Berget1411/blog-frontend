import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PostsProvider from './context/postsContext';
import { Home, Articles } from './pages/';
import Layout from './components/Layout';

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/articles',
          element: <Articles />,
        },
      ],
    },
  ]);
  return (
    <PostsProvider>
      <RouterProvider router={router} />
    </PostsProvider>
  );
}

export default App;
