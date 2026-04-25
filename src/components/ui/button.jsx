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
    transition: all 0.2s ease;

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
                transform: translateY(-1px);
            }

            &:active:not(:disabled) {
                transform: scale(0.98);
            }
        `
    }
`;

const Button = React.forwardRef(
    (
        {
            children,
            variant = "primary",
            isAnimated = false,
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