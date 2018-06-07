import React from 'react';

export default ({ children, value, onChange }) => (
  <div>
    {children}
    <input onChange={onChange} value={value} />
  </div>
);
