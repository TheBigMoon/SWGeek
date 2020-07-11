import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { App } from '../../../redux/store';
import { Person } from '../../../types/entities/entities';
import { getPeople } from '../../../redux/actions/actions';
import PersonItem from './PersonItem';
import Paginator from '../common/Paginator';
import { PageTitle } from '../../../styledComponents/common/common';

interface StateToProps {
  people: Array<Person> | null,
  prevPage: string | null,
  nextPage: string | null
}

interface DispatchToProps {
  getPeople: (page: string) => void
}

const PeopleContainer: React.FC<StateToProps & DispatchToProps> = (
  {
    people, prevPage, nextPage, getPeople
  }
) => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPeople(search));
  }, [dispatch, getPeople, search]);
  const allPeople = people?.map((person) => (
    <PersonItem
      showInfoBlocks={false}
      showLink
      person={person}
    />
  ));
  return (
    <div>
      <PageTitle>
        People
      </PageTitle>
      <Paginator prevPage={prevPage} nextPage={nextPage} getContent={getPeople} />
      {allPeople}
      <Paginator prevPage={prevPage} nextPage={nextPage} getContent={getPeople} />
    </div>
  );
};

const MapStateToProps = (state: App): StateToProps => ({
  people: state.peoplePage.people,
  prevPage: state.peoplePage.prevPage,
  nextPage: state.peoplePage.nextPage
});

export default connect<StateToProps, DispatchToProps, {}, App>(
  MapStateToProps, {
    getPeople
  }
)(PeopleContainer);
