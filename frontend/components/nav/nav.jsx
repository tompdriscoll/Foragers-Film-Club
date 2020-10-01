import React from 'react';
import {logout} from '../../actions/session_actions'

const Nav = (props) => {
    
    let logoutButton
    props.currentUser? logoutButton = [<a id='calendar-link' href ='/#/calendar'>Calendar</a>, <button id='logout' onClick={props.logout}>Logout</button>] : logoutButton = <div id='blank-logout'></div>
        
    return( 
    <div className="splash-nav">
        <a href='/#/h' id="nav-left">
            <svg id='shroomy' version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" space="preserve">
            <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
            <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M4539.9,4919.8c-1158.6-78.5-2085.4-386.8-2828.5-940.3c-218.3-164.7-635.8-580.2-794.7-794.7C258,2294.3-46.5,1099.4,168,241.5c78.5-316,204.9-541.9,427-767.9c136-136,193.4-178.1,325.5-243.2c279.6-130.2,434.7-151.3,928.8-120.7c390.7,24.9,764.1,61.3,1260.1,124.5c214.5,26.8,339,34.5,339,23c0-47.9-166.6-829.2-260.4-1227.5c-162.8-679.8-181.9-783.2-193.4-1076.2c-23-545.8,82.4-861.7,384.9-1166.2c241.3-241.3,538.1-379.2,978.6-459.6c241.3-44.1,974.7-49.8,1196.9-11.5c509.4,91.9,833,239.4,1068.6,490.2c199.2,214.5,306.4,455.8,348.5,796.6c44,337,7.7,616.6-170.4,1365.4c-134.1,563-281.5,1273.5-264.3,1288.8c5.7,5.7,185.8-11.5,400.2-38.3c947.9-118.7,1599-155.1,1851.8-99.6C9348.5-762,9769.8-246.9,9873.2,446.4c134,892.4-245.1,2091.2-913.5,2887.8C8167,4280.2,7037.1,4803,5545.3,4914C5302.1,4931.3,4754.4,4935.1,4539.9,4919.8z"/></g></g>
            </svg>
            <h2 id='logo'>Foragers Film Club</h2>
        </a>
        <div id="nav-right">
            {logoutButton}
        </div>
    </div>) 

}

export default Nav;