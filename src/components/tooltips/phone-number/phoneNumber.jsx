import React, { useState } from 'react';
import PhoneNumberToolTip from "../phone-number-tooltip/PhoneNumberToolTip.jsx";

const PhoneNumber = () => {
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
                    <PhoneNumberToolTip />
                </div>
            )}
        </span>
    );
};

export default PhoneNumber;