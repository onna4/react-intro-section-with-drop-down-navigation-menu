import logo from "../assets/images/logo.svg";
import menuIcon from "../assets/images/icon-menu.svg"
import menuClose from "../assets/images/icon-close-menu.svg"
import arrowUp from "../assets/images/icon-arrow-up.svg"
import arrowDown from "../assets/images/icon-arrow-down.svg"
import todoIcon from "../assets/images/icon-todo.svg"
import calenderIcon from "../assets/images/icon-calendar.svg"
import remindersIcon from "../assets/images/icon-reminders.svg"
import planningIcon from "../assets/images/icon-planning.svg"
import {useRef, useState} from "react"

function Header () {
    const navRef = useRef()
    const miniNav = useRef()
    const miniNavTwo = useRef()

    const showNavbar =() => {
        navRef.current.classList.toggle('mob-nav')
    }

    const showMiniNav =() => {
        miniNav.current.classList.toggle('mob-mininav')

    }

    const showMiniNavTwo =() => {
        miniNavTwo.current.classList.toggle('mob-mininavtwo')
    }

    return (
        <header>
            <img src={logo} alt="logo" className="logo" />
            <img src={menuIcon} alt="menu icon" onClick={showNavbar} className="openMenu" />
            <nav ref={navRef} >
                <img src={menuClose} alt="closing menu icon" className="menuClose" onClick={showNavbar} />
                <ul>
                    <li onClick={showMiniNav} className="itemsStart" >Features
                        <img src={arrowUp} alt="arrow up icon" className="arrowUp" />
                        <img src={arrowDown} alt="arrow down icon" className="arrowDown" />
                        <ul className="features" ref={miniNav} >
                            <li><img src={todoIcon} alt="todo icon" /><a href="#" >Todo List</a></li>
                            <li><img src={calenderIcon} alt="calendar icon" /><a href="#" >Calendar</a></li>
                            <li><img src={remindersIcon} alt="reminders icon" className="reminderimg" /><a href="#" className="reminders" >Reminders</a></li>
                            <li><img src={planningIcon} alt="planning icon" /><a href="#" >Planning</a></li>
                        </ul>
                    </li>
                    <li onClick={showMiniNavTwo} >Company
                        <img src={arrowUp} alt="arrow up icon" className="arrowUp" />
                        <img src={arrowDown} alt="arrow down icon" className="arrowDown" />
                        <ul ref={miniNavTwo} className="company" >
                            <li><a href="#" >History</a></li>
                            <li><a href="#" >Our Team</a></li>
                            <li><a href="#" >Blog</a></li>
                        </ul>
                    </li>
                    <li className="navitems" ><a href="#" >Careers</a></li>
                    <li className="navitems" ><a href="#" >About</a></li>
                </ul>
                <button className="login" >Login</button>
                <button className="register" >Register</button>
            </nav>
        </header>
    )
}

export default Header;