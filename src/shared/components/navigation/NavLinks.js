import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import CreateNew from '../../../news/components/CreateNew';
import './NavLinks.css';

function NavLinks(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModalHandler = () => setModalIsOpen(true);
    const closeModalHandler = () => setModalIsOpen(false);

    return (
        <React.Fragment>
            <CreateNew
                show={modalIsOpen}
                needUpdateHandler={props.needUpdateHandler}
                onCancel={props.closeDrawer ? () => {
                    closeModalHandler();
                    props.closeDrawer();
                }
                    : closeModalHandler} />
            <ul className='nav-links'>
                <li>
                    <NavLink to="/" onClick={props.closeDrawer}>Новини</NavLink>
                </li>
                <li>
                    <button onClick={openModalHandler}>Створити новину</button>
                </li>
            </ul>
        </React.Fragment>
    );
}

export default NavLinks;