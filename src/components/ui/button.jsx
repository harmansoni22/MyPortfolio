import * as React from "react";
import styled, { css } from "styled-components";

const buttonVariants = {
    primary: css`
        background: #3b82f6;
        color: white;
        border: 1px solid #3b82f6;

        &:hover:not(:disabled) {
            background: #2563eb;
            border-color: #2563eb;
        }

        &:active:not(:disabled) {
            transform: scale(0.98);
        }
    `,
    outline: css`
        background: transparent;
        color: #e4e4e7;
        border: 1px solid #52525b;

        &:hover:not(:disabled) {
            background: rgba(255, 255, 255, 0.05);
            border-color: #71717a;
        }

        &:active:not(:disabled) {
            transform: scale(0.98);
        }
    `,
    minimal: css`
        background: transparent;
        color: #e4e4e7;
        border: none;
        border-bottom: 1px solid #52525b;
        border-radius: 0;
        padding-left: 0;
        padding-right: 0;

        &:hover:not(:disabled) {
            color: #ffffff;
            border-bottom-color: #3b82f6;
        }

        &:active:not(:disabled) {
            transform: scale(0.98);
        }
    `,
};

const StyledButton = styled.button`
    position: relative;
    isolation: isolate;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 44px;
    padding: 10px 16px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    transition:
        transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
        box-shadow 220ms ease,
        background-color 220ms ease,
        border-color 220ms ease,
        color 220ms ease;

    > * {
        position: relative;
        z-index: 1;
    }

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 0;
        border-radius: inherit;
        background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.05) 0%,
            rgba(255, 255, 255, 0.16) 100%
        );
        opacity: 0;
        transform: translateX(-102%);
        transition: transform 360ms cubic-bezier(0.22, 1, 0.36, 1), opacity 200ms ease;
    }

    &:focus-visible {
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.35);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
    }

    ${({ $variant }) => buttonVariants[$variant || "primary"]}

    ${({ $fullWidth }) =>
        $fullWidth &&
        css`
            width: 100%;
        `
    }

    ${({ $animated }) =>
        $animated &&
        css`
            &:hover:not(:disabled) {
                transform: translateY(-2px) scale(1.01);
                box-shadow: 0 10px 26px rgba(59, 130, 246, 0.28);
            }

            &:active:not(:disabled) {
                transform: translateY(0) scale(0.97);
                box-shadow: 0 4px 14px rgba(59, 130, 246, 0.18);
            }

            @media (prefers-reduced-motion: reduce) {
                transition: none;

                &:hover:not(:disabled),
                &:active:not(:disabled) {
                    transform: none;
                    box-shadow: none;
                }

                &::before {
                    transition: none;
                }
            }
        `
    }

    ${({ $pseudoAnimated }) =>
  $pseudoAnimated &&
  css`
    &::before {
      opacity: 0;
      transform: translateX(-100%) scaleX(0.85);
      transform-origin: left center;
    }

    &:hover:not(:disabled)::before {
      opacity: 1;
      transform: translateX(0) scaleX(1);
    }

    &:active:not(:disabled)::before {
      opacity: 1;
      transform: translateX(0) scaleX(0.98);
    }

    @media (prefers-reduced-motion: reduce) {
      &:hover:not(:disabled)::before,
      &:active:not(:disabled)::before {
        opacity: 0;
        transform: translateX(-100%) scaleX(1);
      }
    }
  `}

    
`;

const Button = React.forwardRef(
    (
        {
            children,
            variant = "primary",
            isAnimated = false,
            isPseudoAnimated = false,
            fullWidth = false,
            type = "button",
            ...props
        },
        ref
    ) => {
        return (
            <StyledButton
                ref={ref}
                type={type}
                $variant={variant}
                $animated={isAnimated}
                $pseudoAnimated={isPseudoAnimated}
                $fullWidth={fullWidth}
                {...props}
            >
                {children}
            </StyledButton>
        );
    }
);

Button.displayName = "Button";

export default Button;
