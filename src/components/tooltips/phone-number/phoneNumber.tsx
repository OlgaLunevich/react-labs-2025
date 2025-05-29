import React, { useState } from 'react';

interface IPhoneNumberProps {
    children: React.ReactNode;
}

const PhoneNumber = ({children}: IPhoneNumberProps) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

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