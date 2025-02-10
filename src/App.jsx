import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout, ErrorPage, HomePage, ProductDetailPage, SignIn, SignUp } from './pages'

const App = () => {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'detail/:id',
          element: <ProductDetailPage />
        },
        {
          path: 'login',
          element: <SignIn/>
        },
        {
          path: 'register',
          element: <SignUp/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={routes} />
  )
}

export default App