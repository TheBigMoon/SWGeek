import React from 'react';
import { connect } from 'react-redux';
import { App } from '../../../redux/store';
import { Film } from '../../../types/entities/entities';

interface StateToProps {
  films: Array<Film> | null
}

interface DispatchToProps {}

const FilmsContainer: React.FC<StateToProps & DispatchToProps> = ({ films }) => (
  <div>
    Films
  </div>
);

const MapStateToProps = (state: App): StateToProps => ({
  films: state.filmsPage.films
});

export default connect<StateToProps, DispatchToProps, {}, App>(
  MapStateToProps, {}
)(FilmsContainer);
