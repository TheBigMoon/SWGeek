import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { App } from '../../../redux/store';
import { Person } from '../../../types/entities/entities';
import { getPeople } from '../../../redux/actions/actions';
import PersonItem from './PersonItem';
import Paginator from '../common/Paginator';

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPeople(''));
  }, [dispatch, getPeople]);
  const allPeople = people?.map((p) => <PersonItem person={p} />);
  return (
    <div>
      People
      <div>
        {allPeople}
      </div>
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
