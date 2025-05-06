import React, { useState } from 'react';

const PhoneNumber = ({children}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <span
            className='phone-ToolTip'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            &nbsp;phone&nbsp;
            {isHovered && (
                <div className='toolTipWrapper'>
                    {children}
                </div>
            )}
        </span>
    );
};

export default PhoneNumber;