import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Articles, ArticlePage } from './pages/';
import Layout from './components/Layout';
import SignIn from './pages/SignIn';
import { useSession } from './context/sessionContext';
import { Navigate } from 'react-router-dom';

function App() {
  const { currentUsername } = useSession();
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
          element: currentUsername ? <Navigate to='/' /> : <SignIn />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
