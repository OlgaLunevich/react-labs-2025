import React, {Component} from 'react';
import PhoneNumberToolTip from "../phone-number-tooltip/PhoneNumberToolTip.jsx";

class PhoneNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
        };
    }

    handleMouseEnter = () => {
        this.setState({ isHovered: true });
    };

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    };


    render() {
        const {isHovered} = this.state;
        return (
            <span className='phone-ToolTip'
            onMouseLeave={this.handleMouseLeave}
            onMouseEnter={this.handleMouseEnter}>
                &nbsp;phone&nbsp;
                {isHovered && (
                    <div className='toolTipWrapper'><PhoneNumberToolTip/></div>
                )}
            </span>
        )
    }


}

export default PhoneNumber;