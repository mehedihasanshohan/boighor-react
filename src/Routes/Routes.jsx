import React from 'react'
import { createBrowserRouter } from "react-router";
import Root from '../pages/Roots/Root';
import Error from '../pages/ErrorPage/Error';
import Home from '../pages/Home/Home';
import Books from '../pages/Books/Books';
import Book from '../pages/Book/Book';



export  const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: '/',
        element: <Home></Home>,
      },
      {path: '/books', element: <Books></Books>},
      {path: '/book', element: <Book></Book>}
    ]
  },
])
