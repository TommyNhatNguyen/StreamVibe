import React, { forwardRef } from "react";
import { InputWrapper } from "../StyledComponents/InputWrapper";

const Checkbox = (
  { label, children, error, renderInput, classes, ...props },
  ref
) => {
  return (
    <InputWrapper className={`formgroup ${classes}`}>
      <input type="checkbox" className="checkbox-input" {...props} ref={ref} />
      <span className="checkbox-label">
        <i className="fa fa-check"></i>
      </span>
      <label htmlFor="policy">{label}</label>
      {error && <p className="input-error">{error}</p>}
    </InputWrapper>
  );
};
export default forwardRef(Checkbox);
