import React from "react";
import { getNowPlayingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import PageTemplate from '../components/templateMovieListPage';
import PlaylistAddIcon from '../components/cardIcons/addToPlaylist';

const NowPlayingMoviesPage = (props) => {

    const { data, error, isLoading, isError } = useQuery('nowplaying', getNowPlayingMovies)

    if(isLoading) {
        return <Spinner />
    }

    if(isError) {
        return <h1>{error.message}</h1>
    }
    const movies = data.results;

    return (
        <PageTemplate
          title='Now Playing'
          movies={movies}
          action={(movie) => {
            return <PlaylistAddIcon movie={movie} />
          }}
        />
      );
    };

    export default NowPlayingMoviesPage;