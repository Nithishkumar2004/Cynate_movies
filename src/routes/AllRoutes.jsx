// AllRoutes.js
import { Routes, Route } from 'react-router-dom';
import { MovieList, MovieDetails, PageNotFound, Search } from '../pages';
import Signin from '../auth/Signin';
import Signup from '../auth/Signup';
import ProtectedRoute from './ProtectedRoute';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/get-started" element={<Signup />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <MovieList apiPath="movie/now_playing"  />
          </ProtectedRoute>
        }
      />
      <Route
        path="/movies/popular"
        element={
          <ProtectedRoute>
            <MovieList apiPath="movie/popular"  />
          </ProtectedRoute>
        }
      />
      <Route
        path="/movies/top"
        element={
          <ProtectedRoute>
            <MovieList apiPath="movie/top_rated"  />
          </ProtectedRoute>
        }
      />
      <Route
        path="/movies/upcoming"
        element={
          <ProtectedRoute>
            <MovieList apiPath="movie/upcoming"  />
          </ProtectedRoute>
        }
      />
      <Route
        path="movies/:id"
        element={
          <ProtectedRoute>
            <MovieDetails />
          </ProtectedRoute>
        }
      />
         <Route
        path="/:id"
        element={
          <ProtectedRoute>
            <MovieDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/search"
        element={
          <ProtectedRoute>
            <Search />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
