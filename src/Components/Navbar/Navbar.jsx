import React, {  useState } from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';



const Navbar = () => {
    const [lo , setLo] = useState()
    const [active, setActive] = useState("nav_menu");
    const [navbar, setNavbar] = useState(false);
    const Changebackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', Changebackground);
    const [toggleIcon, setToggleIcon] = useState("nav_toggler")
    const navToggle = () => {
        active === 'nav_menu' ? setActive('nav_menu nav_active') : setActive('nav_menu');

        // toggle animation
        toggleIcon === 'nav_toggler' ? setToggleIcon('nav_toggler toggle') : setToggleIcon('nav_toggler')
    }

    useEffect(() => {
        const sign = localStorage.getItem('isdignin');
        setLo(sign);
    }, [])

    return (
        <nav className={navbar ? 'changeNav' : 'nav'}>
            <NavLink to='/' className="nav_brand no-underline text-2xl"><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '10px' }}><img className='logo' src="https://i.postimg.cc/L699S7N0/341146492-772168984337218-2366102651425944232-n.jpg" alt="" /><h2>ACORN <br />PROTOCOL</h2></div></NavLink>

            <ul className={active}>
                <li className="nav_item"><NavLink to='/' className="nav_link no-underline text-2xl ">Home</NavLink></li>
                <li className="nav_item"><NavLink to='/verification' className="nav_link no-underline text-2xl ">Verification </NavLink></li>
                <li className="nav_item"><NavLink to='/airdrop' className="nav_link no-underline text-2xl ">Airdrop </NavLink></li>
                <li className="nav_item"><NavLink to='/con' className="nav_link no-underline text-2xl ">Contract </NavLink></li>
                <li className="nav_item"><NavLink to='/suport' className="nav_link no-underline text-2xl ">Support </NavLink></li>

                <li className="nav_item"><NavLink to='/about' className="nav_link no-underline text-2xl ">About us</NavLink></li>

                <li className="nav_item"><NavLink to='/contract' className="nav_link no-underline text-2xl ">{lo ? <div></div> : 'Login'}</NavLink></li>

            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>

    );
};

export default Navbar;