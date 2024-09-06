import React, { forwardRef, useState } from "react";
import { InputWrapper } from "../StyledComponents/InputWrapper";

const Input = (
  {
    label,
    children,
    error,
    renderInput,
    classes,
    password,
    type = "text",
    ...props
  },
  ref
) => {
  const [showPassword, setShowPassword] = useState(false);
  const _onShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };
  return (
    <InputWrapper className={`formgroup ${classes}`}>
      <label className="formgroup__label">{label}</label>
      {renderInput ? (
        renderInput({ ...props, error, ref })
      ) : password ? (
        <input
          className={`formgroup__input ${error ? "--error" : ""}`}
          {...props}
          ref={ref}
          type={showPassword ? "text" : "password"}
        />
      ) : (
        <input
          className={`formgroup__input ${error ? "--error" : ""}`}
          {...props}
          ref={ref}
        />
      )}
      {password && (
        <div
          className="formgroup__icon password"
          onClick={(e) => _onShowPassword(e)}
        >
          {showPassword ? (
            <span className="password__hide">
              <i className="bi bi-eye-slash"></i>
            </span>
          ) : (
            <span className="password__show">
              <i className="bi bi-eye"></i>
            </span>
          )}
        </div>
      )}
      {error && <p className="input-error">{error}</p>}
    </InputWrapper>
  );
};

export default forwardRef(Input);
