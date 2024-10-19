import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Categories from './Components/Categories/Categories.jsx';
import CategorieDetails from './Components/CategorieDetails/CategorieDetails.jsx';
import Comments from './Components/Comments/Comments.jsx';
import CommentDetails from './Components/CommentDetail/CommentDetails.jsx';
import Error from './Components/ErrorPage/Error.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children:[
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/categories',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element: <Categories></Categories>
      },
      {
        path: '/categorie/:idMeal',
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/random.php/${params.idMeal}`),
        element: <CategorieDetails></CategorieDetails>
      },
      {
        path: '/comments',
        loader: () => fetch('https://jsonplaceholder.typicode.com/comments'),
        element: <Comments></Comments>
      },
      {
        path: '/comment/:commentId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`),
        element: <CommentDetails></CommentDetails>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
