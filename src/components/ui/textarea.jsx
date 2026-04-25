import * as React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #d4d4d8;
`;

const FloatingLabel = styled.label`
  position: absolute;
  left: ${({ $minimal }) => ($minimal ? "0" : "12px")};
  top: 12px;
  font-size: 14px;
  color: #a1a1aa;
  pointer-events: none;
  transition: all 0.2s ease;

  ${({ $active }) =>
    $active &&
    css`
      top: 6px;
      font-size: 12px;
      color: #3b82f6;
    `}
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  resize: none;
  background: transparent;
  color: white;
  font-size: 14px;
  outline: none;
  border: 1px solid #3f3f46;
  border-radius: 8px;
  padding: ${({ $floating }) => ($floating ? "20px 12px 8px" : "10px 12px")};
  transition: all 0.2s ease;

  &::placeholder {
    color: #a1a1aa;
    opacity: ${({ $floating }) => ($floating ? 0 : 1)};
  }

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.35);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${({ $minimal }) =>
    $minimal &&
    css`
      border-top: 0;
      border-left: 0;
      border-right: 0;
      border-bottom: 1px solid #3f3f46;
      border-radius: 0;
      padding-left: 0;
      padding-right: 0;

      &:focus {
        box-shadow: none;
        border-bottom-color: #3b82f6;
      }
    `}

  ${({ $animated }) =>
    $animated &&
    css`
      &:focus {
        transform: scale(1.01);
      }
    `}
`;

const Textarea = React.forwardRef(
  (
    {
      isAnimated = false,
      isLabelFloating = false,
      isMinimal = false,
      label = "Enter text...",
      id,
      rows = 4,
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const textareaId = id || React.useId();

    const [focused, setFocused] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState(defaultValue || "");

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;
    const isActive = focused || !!currentValue;

    const handleChange = (e) => {
      if (!isControlled) setInternalValue(e.target.value);
      onChange?.(e);
    };

    return (
      <Wrapper>
        {!isLabelFloating && (
          <Label htmlFor={textareaId}>{label}</Label>
        )}

        <StyledTextarea
          ref={ref}
          id={textareaId}
          rows={rows}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={isLabelFloating ? " " : label}
          $animated={isAnimated}
          $floating={isLabelFloating}
          $minimal={isMinimal}
          {...props}
        />

        {isLabelFloating && (
          <FloatingLabel
            htmlFor={textareaId}
            $active={isActive}
            $minimal={isMinimal}
          >
            {label}
          </FloatingLabel>
        )}
      </Wrapper>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;