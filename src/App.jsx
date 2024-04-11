import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PostsProvider from './context/postsContext';
import Home from './pages/Home';
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
