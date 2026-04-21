import * as React from "react";

import { cn } from "@/libs/utils";

const Input = ({
    isAnimated = false,
    isLabelFloating = false,
    isMinimal = false,
    label = "Enter text...",
    className,
    type,
    ...props
}) => {
    return (
        <>
            <div className="relative">
                <input
                    type={type}
                    placeholder={label}
                    className={
                        cn(
                            isAnimated && (
                                ""
                            )                            
                        )
                    }
                    {...props}
                />
                <label htmlFor={label} className="absolute left-3 top-2 font-[10px]">
                    {label}
                </label>
            </div>
        </>
    )
}

export default Input;