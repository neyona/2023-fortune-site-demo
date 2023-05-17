import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  RouterProvider,
  Route,
  Switch,
} from 'react-router-dom';
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './styles/main.scss';

import {
  ThemeDyslexiaProvider,
  useDyslexiaTheme,
} from './buttons/useDyslexiaTheme';

import Root from './routes/Root';
import ErrorNote from './routes/ErrorNote';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Confirmation from './routes/Confirmation';
import Fortune from './routes/Fortune';
import Merch from './routes/Merch';
import MerchItem from './routes/MerchItem';
import Webaccess from './routes/Webaccess';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 10,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div><h1>Top Root Error</h1></div>,
      children: [
        { index: true,
          element: <Navigate to="/home" replace />,
          errorElement: <div><p>Index route</p></div>
        },
        {
          path: "home",
          element: <Home />,
          errorElement: <div><p>Home route error element</p></div>,
        },
        {
          path: "fortune",
          element: <Fortune />,
          errorElement: <div><p>Fortune route error element</p></div>,
        },
        {
          path: "about",
          element: <About />,
          errorElement: <div><p>About route error element</p></div>,
        },
        {
          path: "contact",
          element: <Contact />,
          errorElement: <div><p>Contact route error element</p></div>,
        },
        {
          path: "confirmation",
          element: <Confirmation />,
          errorElement: <div><p>Confirmation route error element</p></div>,
        },
        {
          path: "webaccess",
          element: <Webaccess />,
          errorElement: <div><p>Webaccess route error element</p></div>,
        },
        {
          path: "merchandise",
          element: <Merch />,
          errorElement: <ErrorNote />,
        },
        {
          children: [
            {
              path: "merchandise/:merchId",
              element: <MerchItem />,
              errorElement: <ErrorNote />,
            },
            {
              path: "merchandise/*",
              element: <ErrorNote />,
            },
          ],
        },
        {
          path: "error",
          element: <ErrorNote />,
        }
      ],
    },
]);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeDyslexiaProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeDyslexiaProvider>
  <ReactQueryDevtools initialIsOpen />
  </QueryClientProvider>
);
