import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { App } from '../../../redux/store';
import { Person } from '../../../types/entities/entities';
import { getPeople } from '../../../redux/actions/actions';
import PersonItem from './PersonItem';

interface StateToProps {
  people: Array<Person> | null
}

interface DispatchToProps {
  getPeople: () => void
}

const PeopleContainer: React.FC<StateToProps & DispatchToProps> = ({ people, getPeople }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch, getPeople]);
  const allPeople = people?.map((p) => <PersonItem person={p} />);
  return (
    <div>
      People
      <div>
        {allPeople}
      </div>
    </div>
  );
};

const MapStateToProps = (state: App): StateToProps => ({
  people: state.peoplePage.people
});

export default connect<StateToProps, DispatchToProps, {}, App>(
  MapStateToProps, {
    getPeople
  }
)(PeopleContainer);
