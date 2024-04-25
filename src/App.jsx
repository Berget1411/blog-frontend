import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PostsProvider, UserProvider } from './context/';
import { Home, Articles, ArticlePage } from './pages/';
import Layout from './components/Layout';
import SignIn from './pages/SignIn';

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
        {
          path: 'articles/:postTitle',
          element: <ArticlePage />,
        },
        {
          path: '/sign-in',
          element: <SignIn />,
        },
      ],
    },
  ]);

  return (
    <UserProvider>
      <PostsProvider>
        <RouterProvider router={router} />
      </PostsProvider>
    </UserProvider>
  );
}

export default App;
