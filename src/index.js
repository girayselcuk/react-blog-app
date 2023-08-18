import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/veriables.scss';
import './styles/reset.scss';
import './styles/global.scss';
import { MainLayout } from './layouts/main-layout';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BlogList } from './components/blog/blog-list';
import { BlogDetail } from './components/blog/blog-detail';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter([
      {
        element: <MainLayout/>,

        children: [
          {
            index: true,
            element: <BlogList/>
          },
          {
            path: "/detail/:id",
            element: <BlogDetail/>
          }
        ]
      }

    ])}/>
  </React.StrictMode>
);

