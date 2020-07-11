import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { App } from '../../../redux/store';
import { Person } from '../../../types/entities/entities';
import PersonItem from './PersonItem';
import Paginator from '../common/Paginator';
import { FlexBox, PageTitle } from '../../../styledComponents/common/common';
import SearchField from '../common/SearchField';
import Sorter from '../common/Sorter';
import { getPeople, sortPeopleByAZ, sortPeopleByZA } from '../../../redux/actions/peopleActions';

interface StateToProps {
  people: Array<Person> | null,
  prevPage: string | null,
  nextPage: string | null
}

interface DispatchToProps {
  getPeople: (page: string) => void,
  sortPeopleByAZ: (sortByAZ: boolean) => void,
  sortPeopleByZA: (sortByZA: boolean) => void,
}

const PeopleContainer: React.FC<StateToProps & DispatchToProps> = (
  {
    people, prevPage, nextPage, getPeople, sortPeopleByAZ, sortPeopleByZA
  }
) => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPeople(search));
  }, [dispatch, getPeople, search]);
  const allPeople = people?.map((person) => (
    <PersonItem
      key={person.name}
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
      <FlexBox column={false} center>
        <SearchField getContent={getPeople} />
        <Sorter sortByAZ={sortPeopleByAZ} sortByZA={sortPeopleByZA} />
      </FlexBox>
      <Paginator prevPage={prevPage} nextPage={nextPage} />
      {allPeople}
      <Paginator prevPage={prevPage} nextPage={nextPage} />
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
    getPeople,
    sortPeopleByAZ,
    sortPeopleByZA
  }
)(PeopleContainer);
