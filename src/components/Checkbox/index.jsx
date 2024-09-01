import React, { forwardRef } from "react";
import { InputWrapper } from "../StyledComponents/InputWrapper";

const Checkbox = (
  { label, children, error, renderInput, classes, ...props },
  ref
) => {
  return (
    <InputWrapper className={`formgroup ${classes}`}>
      <div className="checkbox__group">
        <input
          type="checkbox"
          className="checkbox__group-input"
          {...props}
          ref={ref}
        />
        <span className="checkbox__group-icon">
          <i className="fa fa-check"></i>
        </span>
      </div>
      <label htmlFor="policy">{label}</label>
      {error && <p className="input-error">{error}</p>}
    </InputWrapper>
  );
};
export default forwardRef(Checkbox);
