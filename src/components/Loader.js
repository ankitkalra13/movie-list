import React from 'react';

const Loader = ({ loading }) => {
  return (
    loading && (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 9999,
        }}
      >
        <img
          src="/assets/new-spinner.svg" 
          alt="Loading..."
          style={{ width: '120px', height: '120px' }}
        />
      </div>
    )
  );
};

export default Loader;
