/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import './style.css';

const Input: any = ({ name, placeholder, ...rest }) => {
  const inputRef = useRef(null);
  const {
    fieldName, registerField, defaultValue, error,
  } = useField(name);

  useEffect(() => {
    registerField({ name: fieldName, ref: inputRef.current, path: 'value' });
  }, [inputRef, registerField]);

  return (
    <div>
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        placeholder={error || placeholder}
        {...rest}
      />
      {/* {error && <span style={{ color: '#f00' }}>{error}</span>} */}
    </div>
  );
};

export default Input;
