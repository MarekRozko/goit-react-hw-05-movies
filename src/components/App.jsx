import React from "react";
import { lazy, Suspense} from 'react';
import { Routes, Route} from "react-router-dom";
import Loader from "./Loader/Loader";



const Navbar = lazy(() => import('./modules/Navbar/Navbar'));
const HomePage = lazy(() => import('../pages/Homepage/Homepage'));
const Moviespage = lazy(() => import('../pages/Movies/Moviespage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const DetailsMovies = lazy(() => import('./DetailsMovies/DetailsMovies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

 const App = () => {
  return (

      <Suspense fallback={<Loader/>}>
          <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Moviespage />} />
          <Route path="movies/:movieId" element={<DetailsMovies />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

  );
};
export default App;