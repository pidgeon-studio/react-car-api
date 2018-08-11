import React from 'react';
import PropTypes from 'prop-types';

const Loading = (Component) => {
  return (props) => (
    props.isLoading ? <h1>Loading...</h1> : <Component {...props}/>
  );
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default Loading;