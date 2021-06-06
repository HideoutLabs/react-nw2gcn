import React from 'react';

export default function RedButton({ mytext, secondtext, third , forth}) {
  return (
    <div>
      <button style={{ background: 'red' }}>
        {mytext} {secondtext} {third} {forth}
      </button>
    </div>
  );
}
