import React, { forwardRef } from "react";
import { InputWrapper } from "../StyledComponents/InputWrapper";

const Input = (
  { label, children, error, renderInput, classes, ...props },
  ref
) => {
  return (
    <InputWrapper className={`formgroup ${classes}`}>
      <label className="formgroup__label">{label}</label>
      {renderInput ? (
        renderInput({ ...props, error, ref })
      ) : (
        <input
          type="text"
          className={`formgroup__input ${error ? "--error" : ""}`}
          {...props}
          ref={ref}
        />
      )}
      {error && <p className="input-error">{error}</p>}
    </InputWrapper>
  );
};

export default forwardRef(Input);
