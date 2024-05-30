import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Articles, ArticlePage } from './pages/';
import Layout from './components/Layout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Edit from './pages/Edit';
import { useSession } from './context/sessionContext';
import { Navigate } from 'react-router-dom';

function App() {
  const { accessToken, admin } = useSession();
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
          element: accessToken ? <Navigate to='/' /> : <SignIn />,
        },
        {
          path: '/sign-up',
          element: accessToken ? <Navigate to='/' /> : <SignUp />,
        },
        {
          path: '/edit',
          element: !admin ? <Navigate to='/' /> : <Edit />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
