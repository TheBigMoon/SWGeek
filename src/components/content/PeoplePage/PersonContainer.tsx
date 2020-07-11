import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { App } from '../../../redux/store';
import { Person } from '../../../types/entities/entities';
import PersonItem from './PersonItem';
import { getPerson } from '../../../redux/actions/peopleActions';

interface StateToProps {
  person: Person | null
}

interface DispatchToProps {
  getPerson: (personId: number) => void
}

const PersonContainer: React.FC<StateToProps & DispatchToProps> = ({ person, getPerson }) => {
  const { personId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPerson(personId));
  }, [dispatch, getPerson, personId]);
  return (
    <div>
      <PersonItem showInfoBlocks showLink={false} person={person} />
    </div>
  );
};

const MapStateToProps = (state: App): StateToProps => ({
  person: state.peoplePage.person
});

export default connect<StateToProps, DispatchToProps, {}, App>(
  MapStateToProps, {
    getPerson
  }
)(PersonContainer);
