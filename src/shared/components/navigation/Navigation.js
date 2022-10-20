import React, { useState } from 'react';

import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import './Navigation.css';

function Navigation(props) {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer = () => setDrawerIsOpen(true);
    const closeDrawer = () => setDrawerIsOpen(false);

    return (
        <React.Fragment>
            <SideDrawer show={drawerIsOpen} closeDrawer={closeDrawer}>
                <nav className='navigation__drawer-nav'>
                    <NavLinks closeDrawer={closeDrawer} needUpdateHandler={props.needUpdateHandler} />
                </nav>
            </SideDrawer>
            <header className='navigation__header'>
                <button className="navigation__menu-btn" onClick={openDrawer}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="navigation__title">Правда.UA</h1>
                <nav className='navigation__header-nav'>
                    <NavLinks needUpdateHandler={props.needUpdateHandler} />
                </nav>
            </header>
        </React.Fragment>
    );
}

export default Navigation;