import "./TextInputLiveFeedback.scss"
import React from 'react';
import { useField } from 'formik';

export const TextInputLiveFeedback = ({ label, helpText, ...props }) => {
    const [field, meta] = useField(props);
  
    const [didFocus, setDidFocus] = React.useState(false);
    const handleFocus = () => setDidFocus(true);
    const showFeedback =
      (!!didFocus && field.value.trim().length > 2) || meta.touched;
  
    return (
      <div
        className={`form-control ${
          showFeedback ? (meta.error ? 'invalid' : 'valid') : ''
        }`}
      >
        <div>
          <label htmlFor={props.id}>{label}</label>{' '}
          {showFeedback ? (
            <div
              id={`${props.id}-feedback`}
              aria-live="polite"
              className="feedback"
            >
              {meta.error ? meta.error : '✓'}
            </div>
          ) : null}
        </div>
        <input
          {...props}
          {...field}
          aria-describedby={`${props.id}-feedback ${props.id}-help`}
          onFocus={handleFocus}
        />
        <div className="helpText" id={`${props.id}-help`} tabIndex="-1">
          {helpText}
        </div>
      </div>
    );
  };