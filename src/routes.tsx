import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Movie from "./pages/movie";
import TvSeries from "./pages/tv-series";
import Bookmark from "./pages/bookmark";
import Layout from "./pages/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "movies", element: <Movie /> },
      { path: "tv-series", element: <TvSeries /> },
      { path: "bookmarks", element: <Bookmark /> },
    ],
  },
]);
