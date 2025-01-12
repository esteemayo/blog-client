import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../components/layouts/MainLayout';
import AccountLayout from '../components/layouts/accountLayout/AccountLayout';

import {
  UserProfile,
  Dashboard,
  ForgotPassword,
  Home,
  Login,
  MyPosts,
  NotFound,
  PasswordSettings,
  Posts,
  PostDetails,
  ProfileSettings,
  Register,
  ResetPassword,
} from '../routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'posts',
        element: <Posts />,
      },
      {
        path: 'posts/:slug',
        element: <PostDetails />,
      },
      {
        path: 'accounts',
        element: <AccountLayout />,
        children: [
          {
            path: 'user-profile',
            element: <UserProfile />,
          },
          {
            path: 'dashboard',
            element: <Dashboard />,
          },
          {
            path: 'profile-settings',
            element: <ProfileSettings />,
          },
          {
            path: 'password-settings',
            element: <PasswordSettings />,
          },
          {
            path: 'my-posts',
            element: <MyPosts />,
          },
        ],
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: 'reset-password/:token',
        element: <ResetPassword />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
