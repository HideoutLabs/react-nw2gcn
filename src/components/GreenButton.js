import React from 'react';

export default function GreenButton(props) {
  return (
    <div>
      <button style={{ background: 'green' }}>{props.mytext}</button>
    </div>
  );
}
