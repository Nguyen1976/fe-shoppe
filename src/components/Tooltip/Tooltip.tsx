import React, { useState } from 'react';

interface TooltipProps {
    funcRender?: () => React.ReactNode;
    children?: React.ReactNode;
    width?: number;
    top?: number;
    left?: number;
    right?: number;
    afterArrow?: boolean;
    scaleTopRight?: boolean;
    fadeIn?: boolean;
    scaleTop?: boolean;
    hideDefault?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
    funcRender,
    children,
    width,
    top,
    left,
    right,
    afterArrow,
    scaleTopRight,
    fadeIn,
    scaleTop,
    hideDefault,
}) => {
    const [isShow, setIsShow] = useState<boolean>(false);

    return (
        <div className="relative">
            <span
                className="group"
                onMouseEnter={() => setIsShow(true)}
                onMouseLeave={() => setIsShow(false)}
            >
                {children}
                {isShow && (
                    <div
                        className={`
                            z-40
                            absolute 
                            ${afterArrow ? 'after-arrow' : ''} 
                            after-bridge
                            bg-white 
                            shadow-lg
                            opacity-0
                            ${
                                scaleTopRight
                                    ? 'origin-top-right animate-scale'
                                    : ''
                            } 
                            ${fadeIn ? 'animate-fade-in' : ''}
                            ${scaleTop ? 'animate-scale origin-top' : ''}
                            ${hideDefault ? 'opacity-100' : ''}
                        `}
                        style={{
                            left: `${left}px`,
                            right: `${right}px`,
                            top: `${top}px`,
                            width: `${width}px`,
                        }}
                    >
                        {funcRender && funcRender()}
                    </div>
                )}
            </span>
        </div>
    );
};

export default Tooltip;
