import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { EditorList } from 'pages/EditorList/EditorList';
import { Form } from 'components/Form/Form';
import { fetchSearchByKeyword } from '../../API/FetchMovies';

export default function Movies() {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMoviesText, setNoMoviesText] = useState(false);

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryMovie = searchParams.get('query');

    if (queryMovie) {
      setLoading(true);

      fetchSearchByKeyword(queryMovie)
        .then(searchResults => {
          setSearchFilms(searchResults);
          setNoMoviesText(searchResults.length === 0);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [location, searchParams]);

  const searchMovies = queryMovie => {
    setSearchParams({ query: queryMovie });
  };

  return (
    <main>
      <Form searchMovies={searchMovies} />
      {loading && <Loader />}
      {noMoviesText && (
        <p>There are no movies with this request. Please, try again</p>
      )}
      {searchFilms && <EditorList films={searchFilms} />}
    </main>
  );
}
