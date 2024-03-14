import React from 'react'

const ButtonForm = ({ ButtonInput }) => {
  return (
    <button type="submit" className="btn btn-primary">
      {ButtonInput}
    </button>
  );
};

export default ButtonForm