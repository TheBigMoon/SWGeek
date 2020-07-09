import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { App } from '../../../redux/store';
import { Film } from '../../../types/entities/entities';
import FilmItem from './FilmItem';
import { getFilms } from '../../../redux/actions/actions';

interface StateToProps {
  films: Array<Film> | null
}

interface DispatchToProps {
  getFilms: () => void
}

const FilmsContainer: React.FC<StateToProps & DispatchToProps> = ({ films, getFilms }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch, getFilms]);
  const allFilms = films?.map((film) => <FilmItem film={film} />);
  return (
    <div>
      Films
      {allFilms}
    </div>
  );
};

const MapStateToProps = (state: App): StateToProps => ({
  films: state.filmsPage.films
});

export default connect<StateToProps, DispatchToProps, {}, App>(
  MapStateToProps, {
    getFilms
  }
)(FilmsContainer);
