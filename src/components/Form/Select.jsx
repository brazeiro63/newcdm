import React, { useRef, useEffect } from 'react';

import { useField } from '@unform/core';

/**
 * Select component for Unform (without React Select)
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
 */
export default function Select({ name, label, children, ...rest }) {
  const selectRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      ref: selectRef,
      name: fieldName,
      getValue: ref => {
        return ref.current?.value;
      },
      setValue: (ref, newValue) => {
        ref.current.value = newValue;
      },
      clearValue: ref => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <label htmlFor={fieldName}>{label}</label>

      <select id={fieldName} ref={selectRef} defaultValue={defaultValue} {...rest}>
        {children}
      </select>

      {error && <span className="error">{error}</span>}
    </div>
  );
}
