import React from 'react';

const CardGenre = (props) => {
  const card = {
    backgroundColor: '#4B95C3',
    width: '150px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    color: 'white',
    borderRadius: '5px',
  };
  return (
    <div style={card}>
      <p>{props.name}</p>
    </div>
  );
};

export default CardGenre;
