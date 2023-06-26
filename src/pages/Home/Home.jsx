import React, { useEffect, useState } from 'react';
import { EditorList } from 'pages/EditorList/EditorList';
import { fetchMovies } from '../../API/FetchMovies';
import { Loader } from 'components/Loader/Loader';

export default function Home() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingFilms = () => {
      setLoading(true);

      fetchMovies()
        .then(trendingFilms => {
          setFilms(trendingFilms);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchTrendingFilms();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <EditorList films={films} />

      {loading && <Loader />}
    </main>
  );
}
