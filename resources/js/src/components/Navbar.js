import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../../css/navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(true);
        } else {
            setButton(false);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Mobile Phones
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/manufacturers' className='nav-links' onClick={closeMobileMenu}>
                            Manufacturers
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
