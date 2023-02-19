import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/*', // TODO: 先判斷有沒有這個chatroom的權限，沒有的話顯示 <div>你沒權限</div>
    element: <App />,
    children: [
      {
        path: 'team/:teamId/all',
        element: <div>Initial page</div>
      }
    ]
  },
  {
    path: '/:chatroom', // TODO: 先判斷有沒有這個workspace的權限，沒有的話顯示 <div>你沒權限</div>
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
