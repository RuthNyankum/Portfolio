import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './layouts/rootLayout';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/project';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'about-me',
          element: <About />,
        },
        {
          path: 'projects',
          element: <Projects />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
