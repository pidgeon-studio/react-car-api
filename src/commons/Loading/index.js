import React from 'react';

const Loading = (Component) => {
  return (props) => (
    props.isLoading ? <h1>Loading...</h1> : <Component {...props}/>
  );
};

export default Loading;