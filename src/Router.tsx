import { createBrowserRouter } from 'react-router-dom';
import App from './App';
// import Home from './pages/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/home",
  //   element: <Home />,
  // },
], { basename: "/" });
