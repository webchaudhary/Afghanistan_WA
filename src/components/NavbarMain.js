import React, { useEffect, useState } from 'react';
import Logo from "../assets/images/logo-1.png"
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaExternalLinkAlt } from "react-icons/fa";
import { NavLink, useLocation } from 'react-router-dom';
import { useSelectedFeatureContext } from '../contexts/SelectedFeatureContext';

const NavbarMain = () => {
    const { selectedView, selectedFeatureName } = useSelectedFeatureContext();
    const [showMenu, setShowMenu] = useState(false);

    const handleToggle = () => {
        setShowMenu(!showMenu);
    };

    const handleLinkClick = () => {
        setShowMenu(false);
    };
    // const location = useLocation()
    // const collapseName = location.pathname.split("/")[1];



    return (
        <>
            <div className='navbar_main_container'>
                <div className='short_nav_container'>
                    <div className='logo_text'>
                        <h1>Afghanistan Water Informatics Dashboard</h1>
                    </div>

                    <div className="main_nav__logo">
                        <img src={Logo} alt="nav_logo" />
                    </div>

                    <div className="navbar__toggle scrolled" onClick={handleToggle}>
                        {showMenu ? <FaTimes /> : <FaBars />}
                    </div>
                </div>


                <div className='navbar_container'>

                    <div className={`main_nav ${showMenu ? 'show' : ''}`}>
                        <div className="nav__content">

                            <div className='nav__list'>
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}

                                    to="/" onClick={handleLinkClick}>
                                    Overview
                                </NavLink>

                                

                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}

                                    to="/evapotranspiration" onClick={handleLinkClick}>
                                    Evapotranspiration
                                </NavLink>



                                <NavLink className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}
                                    to="/precipitation" onClick={handleLinkClick}>
                                    Precipitation
                                </NavLink>

                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}
                                    to="/biomass" onClick={handleLinkClick}>
                                    Biomass Production
                                </NavLink>

                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}
                                    to="/water-footprint" onClick={handleLinkClick}>
                                    Water Footprint
                                </NavLink>

                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}
                                    to="/water-productivity" onClick={handleLinkClick}>
                                    Water Productivity
                                </NavLink>

                                {(selectedFeatureName === "Afghanistan" || selectedFeatureName === "All") && (
                                    <NavLink
                                        className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}
                                        to="/virtual-water" onClick={handleLinkClick}>
                                        Virtual Water
                                    </NavLink>
                                )}

                                {/* <div className='dropdown_nav_container'>
                                    <div className={`dropdown_nav ${collapseName === 'water' ? 'active_nav' : 'nav__item'}`} >
                                        Water&nbsp;<span><i className="fa fa-angle-down" aria-hidden="true"></i></span>
                                    </div>
                                    <div className="dropdown_content">
                                        <NavLink 
                                        className={({ isActive }) => (isActive ? 'active_dropdown_link' : 'dropdown_link')}
                                        to="/water/water-footprint" onClick={handleLinkClick}> Water Footprint</NavLink>
                                        <NavLink 
                                        className={({ isActive }) => (isActive ? 'active_dropdown_link' : 'dropdown_link')}
                                        to="/water/water-productivity" onClick={handleLinkClick}>  Water Productivity</NavLink>
                                        <NavLink 
                                       className={({ isActive }) => (isActive ? 'active_dropdown_link' : 'dropdown_link')}
                                        to="/water/virtual-water" onClick={handleLinkClick}> Virtual Water</NavLink>
                                    </div>

                                    
                                </div> */}


                                <NavLink className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}
                                    to="/land-classification" onClick={handleLinkClick}>
                                    Land cover classification
                                </NavLink>

                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}
                                    to="/drought-conditions" onClick={handleLinkClick}>
                                    Drought Condition
                                </NavLink>

                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}
                                    to="/climate" onClick={handleLinkClick}>
                                    Climate Change
                                </NavLink>

                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}

                                    to="/benchmark" onClick={handleLinkClick}>
                                    Benchmark
                                </NavLink>


                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}
                                    to="/other-data" onClick={handleLinkClick}>
                                    Other Data
                                </NavLink>
                                {/* <NavLink
                                    className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}
                                    to="/download" onClick={handleLinkClick}>
                                    Download
                                </NavLink> */}

                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}
                                    to="/data-manual" onClick={handleLinkClick}>
                                    Data Manual
                                </NavLink>


                                {/* <a className="nav__item"
                                    href="https://indiadroughtmonitor.in/" onClick={handleLinkClick} target='_blank' rel="noreferrer noopener">
                                    India Drought Monitor&nbsp;<FaExternalLinkAlt />
                                </a> */}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>



    )
}

export default NavbarMain
