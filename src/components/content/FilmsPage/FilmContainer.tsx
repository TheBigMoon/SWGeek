import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { App } from '../../../redux/store';
import { Film } from '../../../types/entities/entities';
import FilmItem from './FilmItem';
import { getFilm } from '../../../redux/actions/filmsActions';

interface StateToProps {
  film: Film | null
}

interface DispatchToProps {
  getFilm: (filmId: number) => void
}

const FilmContainer: React.FC<StateToProps & DispatchToProps> = ({ film, getFilm }) => {
  const dispatch = useDispatch();
  const { filmId } = useParams();
  useEffect(() => {
    dispatch(getFilm(filmId));
  }, [getFilm, filmId, dispatch]);
  return (
    <div>
      <FilmItem showInfoBlocks showLink={false} film={film} />
    </div>
  );
};

const MapStateToProps = (state: App): StateToProps => ({
  film: state.filmsPage.film
});

export default connect<StateToProps, DispatchToProps, {}, App>(
  MapStateToProps, {
    getFilm
  }
)(FilmContainer);
