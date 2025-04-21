import './header.css';
import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeButton: 'Menu',
        };
    }

    handleButtonClick = (buttonName) => {
        this.setState({ activeButton: buttonName });
    };

    render() {
        const { activeButton} = this.state;
        const {basketCount} = this.props;

        return (
            <header>
                <div className='headerContainer'>
                    <div className='logo'>
                        <img src='src/assets/logo.svg' alt='logo' />
                    </div>
                    <div className='navBar'>
                        <div className='navButtons'>
                            <div>
                                <button disabled
                                    onClick={() => this.handleButtonClick('Home')}
                                    className={activeButton === 'Home' ? 'active' : ''}
                                >
                                    Home
                                </button>
                            </div>
                            <div>
                                <button disabled
                                    onClick={() => this.handleButtonClick('Menu')}
                                    className={activeButton === 'Menu' ? 'active' : ''}
                                >
                                    Menu
                                </button>
                            </div>
                            <div>
                                <button disabled
                                    onClick={() => this.handleButtonClick('Company')}
                                    className={activeButton === 'Company' ? 'active' : ''}
                                >
                                    Company
                                </button>
                            </div>
                            <div>
                                <button disabled
                                    onClick={() => this.handleButtonClick('Login')}
                                    className={activeButton === 'Login' ? 'active' : ''}
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                        <div className='basketContainer'>
                            <button className='basketButton'>
                                <div className='basketCounter'>
                                    <div className='basketCounterValue'>{basketCount}</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;