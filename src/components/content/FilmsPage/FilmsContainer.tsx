import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { App } from '../../../redux/store';
import { Film } from '../../../types/entities/entities';
import FilmItem from './FilmItem';
import { getFilms, sortFilmsByAZ, sortFilmsByZA } from '../../../redux/actions/actions';
import {FlexBox, PageTitle} from '../../../styledComponents/common/common';
import SearchField from '../common/SearchField';
import Sorter from '../common/Sorter';

interface StateToProps {
  films: Array<Film> | null
}

interface DispatchToProps {
  getFilms: (page: string) => void,
  sortFilmsByAZ: (sortByAZ: boolean) => void
  sortFilmsByZA: (sortByZA: boolean) => void
}

const FilmsContainer: React.FC<StateToProps & DispatchToProps> = (
  {
    films, getFilms, sortFilmsByAZ, sortFilmsByZA
  }
) => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFilms(search));
  }, [dispatch, getFilms, search]);
  const allFilms = films?.map((film) => <FilmItem showInfoBlocks={false} showLink film={film} />);
  return (
    <div>
      <PageTitle>
        Films
      </PageTitle>
      <FlexBox column={false} center>
        <SearchField getContent={getFilms} />
        <Sorter sortByAZ={sortFilmsByAZ} sortByZA={sortFilmsByZA} />
      </FlexBox>
      {allFilms}
    </div>
  );
};

const MapStateToProps = (state: App): StateToProps => ({
  films: state.filmsPage.films
});

export default connect<StateToProps, DispatchToProps, {}, App>(
  MapStateToProps, {
    getFilms,
    sortFilmsByAZ,
    sortFilmsByZA
  }
)(FilmsContainer);
