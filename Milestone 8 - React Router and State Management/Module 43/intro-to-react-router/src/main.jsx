import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/root/Root.jsx';
import Home from './components/home/Home.jsx';
import Mobiles from './components/mobiles/Mobiles.jsx';
import Laptop from './components/laptops/Laptops.jsx';
import Users from './components/users/Users.jsx';
import Users2 from './components/users2/Users2.jsx';
import UserDetails from './components/user-details/UserDetails.jsx';
import Posts from './components/posts/Posts.jsx';
import Post from './components/post/Post.jsx';
import PostDetails from './components/post-details/PostDetails.jsx';

const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'mobiles',
        Component: Mobiles
      },
      {
        path: 'laptops',
        Component: Laptop
      },
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'user2',
        element: <Suspense fallback={<span>Loading...</span>}>
          <Users2 userPromise={userPromise}></Users2>
        </Suspense>
      },
      {
        path: 'user/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: 'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },
      {
        path: 'posts/:postId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails
      }
    ]
  },
  {
    path: 'about',
    element: <div>About Me Here</div>
  },
  {
    path: 'blogs',
    element: <div>All My Blogs Here</div>
  },
  {
    path: 'app',
    Component: App
  },
  {
    path: '*',
    element: <h3>Not Found: 404 Status</h3>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
