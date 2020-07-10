import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { App } from '../../../redux/store';
import { Film } from '../../../types/entities/entities';
import FilmItem from './FilmItem';
import { getFilms } from '../../../redux/actions/actions';
import { PageTitle } from '../../../styledComponents/common/common';

interface StateToProps {
  films: Array<Film> | null
}

interface DispatchToProps {
  getFilms: (page: string) => void
}

const FilmsContainer: React.FC<StateToProps & DispatchToProps> = ({ films, getFilms }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFilms(''));
  }, [dispatch, getFilms]);
  const allFilms = films?.map((film) => <FilmItem showInfoBlocks={false} showLink film={film} />);
  return (
    <div>
      <PageTitle>
        Films
      </PageTitle>
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
