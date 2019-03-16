import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return <div>select a song</div>;
  }

  return (
    <div>
      <h3>song details:</h3>
      <p>title: {selectedSong.title}</p>
      <p>length: {selectedSong.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
