import React from 'react';

const Accordion = ({ title, content, stylected: open }) => {
  const styleDiv = {
    border: '1px solid black',
    padding: '1rem',
    margin: '0.5rem',
    cursor: 'pointer',
  };

  return (
    <div style={styleDiv}>
      <h3>{title}</h3>
      <p
        style={
          open
            ? {
                maxHeight: '300px',
              }
            : {
                maxHeight: '0',
                overflow: 'hidden',
                padding: '0',
                margin: '0',
              }
        }
      >
        {content}
      </p>
    </div>
  );
};

export { Accordion };
