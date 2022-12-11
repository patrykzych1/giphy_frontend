import './App.css'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './views/Dashboard'
import Giphy from './views/Giphy'

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/:id',
      element: <Giphy />
    }
  ])
  return (
    <div className='App'>
      <Container className='p-2'>
        <RouterProvider router={router} />
      </Container>
    </div>
  )
}

export default App
