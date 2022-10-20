import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Backdrop from '../UIElements/Backdrop';
import './SideDrawer.css';

// function SideDrawer(props) {
//     return (
//         <React.Fragment>
//             <CSSTransition in={props.show} timeout={2000} classNames="slide-in-left" mountOnEnter unmountOnExit>
//                 <aside className='side-drawer'>
//                     {props.children}
//                 </aside>
//             </CSSTransition>
//             <CSSTransition in={props.show} timeout={300} classNames="slide-backdrop" mountOnEnter unmountOnExit>
//                 <div className='side-drawer__backdrop' onClick={props.closeDrawer} />
//             </CSSTransition>
//         </React.Fragment>
//     );
// }

function SideDrawer(props) {
    return (
        <React.Fragment>
            {props.show && <Backdrop onClick={props.closeDrawer} />}
            <CSSTransition in={props.show} timeout={2000} classNames="slide-in-left" mountOnEnter unmountOnExit>
                <aside className='side-drawer'>
                    {props.children}
                </aside>
            </CSSTransition>
        </React.Fragment>
    );
}

export default SideDrawer;