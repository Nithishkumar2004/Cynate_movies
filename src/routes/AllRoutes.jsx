// AllRoutes.js
import { Routes, Route } from 'react-router-dom';
import { MovieList, MovieDetails, PageNotFound, Search } from '../pages';
import Signin from '../auth/Signin';
import Signup from '../auth/Signup';
import ProtectedRoute from './ProtectedRoute';

export const AllRoutes = ({ searchQuery }) => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/get-started" element={<Signup />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <MovieList apiPath="movie/now_playing" searchQuery={searchQuery} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/movies/popular"
        element={
          <ProtectedRoute>
            <MovieList apiPath="movie/popular" searchQuery={searchQuery} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/movies/top"
        element={
          <ProtectedRoute>
            <MovieList apiPath="movie/top_rated" searchQuery={searchQuery} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/movies/upcoming"
        element={
          <ProtectedRoute>
            <MovieList apiPath="movie/upcoming" searchQuery={searchQuery} />
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
