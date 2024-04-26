import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { PostsProvider, SessionProvider } from './context/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SessionProvider>
    <PostsProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PostsProvider>
  </SessionProvider>
);
