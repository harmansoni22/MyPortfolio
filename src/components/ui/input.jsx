"use client";

import * as React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  	position: relative;
  	width: 100%;
`;

const TopLabel = styled.label`
  	display: block;
  	margin-bottom: 0.25rem;
  	font-size: 0.875rem;
  	font-weight: 500;
  	color: rgb(212 212 216);
`;

const sharedInputStyles = css`
  	width: 100%;
  	background: transparent;
  	color: white;
  	font-size: 0.875rem;
  	outline: none;
  	transition: all 200ms ease;
  	border: 1px solid rgb(63 63 70);
  	border-radius: 0.375rem;
  	padding: 0.5rem 0.75rem;

  	&::placeholder {
    	color: rgb(161 161 170);
  	}

  	&:focus {
    	border: none;
    	box-shadow: 0 0 0 2px rgba(168, 168, 168, 0.22);
  	}

  	&:disabled {
    	cursor: not-allowed;
    	opacity: 0.5;
  	}
`;

const StyledInput = styled.input`
  	${sharedInputStyles}

  	${({ $isMinimal }) =>
    	$isMinimal &&
    	css`
      		border-left: 0;
      		border-right: 0;
      		border-top: 0;
      		border-bottom: 1px solid rgb(63 63 70);
      		border-radius: 0;
      		padding-left: 0;
      		padding-right: 0;

      		&:focus {
        		box-shadow: none;
      		}
    `}

  	${({ $isAnimated }) =>
    	$isAnimated &&
    	css`
      		&:focus {
        		transform: scale(1.01);
      		}
    `}

  	${({ $isLabelFloating }) =>
    	$isLabelFloating &&
    	css`
      		padding-top: 1.25rem;
      		padding-bottom: 0.5rem;

      		&::placeholder {
        		color: transparent;
      		}
    `}
`;

const FloatingLabel = styled.label`
  	position: absolute;
  	top: 50%;
  	left: ${({ $isMinimal }) => ($isMinimal ? "0" : "0.75rem")};
  	transform: translateY(-50%);
  	font-size: 0.875rem;
  	color: rgb(161 161 170);
  	pointer-events: none;
  	transition: all 200ms ease;

  	${StyledInput}:focus + &,
  	${StyledInput}:not(:placeholder-shown) + & {
    	top: 0.5rem;
    	transform: translateY(0);
    	font-size: 0.75rem;
  	}

  	${StyledInput}:focus + & {
    	color: rgb(230, 230, 230);
  	}
`;

const Input = React.forwardRef(
  	(
    	{
      		isAnimated = false,
      		isLabelFloating = false,
      		isMinimal = false,
      		label = "Enter text...",
      		className,
      		type = "text",
      		id,
      		...props
    	},
    	ref
  	) => {
    	const inputId = id || React.useId();

    	return (
      		<Wrapper className={className}>
        		{!isLabelFloating && <TopLabel htmlFor={inputId}>{label}</TopLabel>}

        		<StyledInput
          			ref={ref}
          			id={inputId}
          			type={type}
          			placeholder={isLabelFloating ? " " : label}
          			$isAnimated={isAnimated}
          			$isLabelFloating={isLabelFloating}
          			$isMinimal={isMinimal}
          			{...props}
        		/>

        		{isLabelFloating && (
          			<FloatingLabel htmlFor={inputId} $isMinimal={isMinimal}>
            			{label}
          			</FloatingLabel>
        		)}
      		</Wrapper>
    	);
  	}
);

Input.displayName = "Input";

export default Input;