import logo from "../assets/images/logo.svg";
import menuIcon from "../assets/images/icon-menu.svg"
import menuClose from "../assets/images/icon-close-menu.svg"
import arrowUp from "../assets/images/icon-arrow-up.svg"
import arrowDown from "../assets/images/icon-arrow-down.svg"
import todoIcon from "../assets/images/icon-todo.svg"
import calenderIcon from "../assets/images/icon-calendar.svg"
import remindersIcon from "../assets/images/icon-reminders.svg"
import planningIcon from "../assets/images/icon-planning.svg"
import { useRef, useState } from "react"

function Header () {
    const [miniNavButton, setMiniNavButton] = useState(false)
    const [secMiniNavButton, setSecMiniNavButton] = useState(false)

    const navRef = useRef(null)

    const toggleNavbar = () => {
        navRef.current.classList.toggle("responsiveNav")
    }

    const toggleMiniNav =() => {
        setMiniNavButton(prevMiniNavButton => !prevMiniNavButton)
    }

    const toggleMiniNavTwo =() => {
       setSecMiniNavButton(prevSecMiniNavButton => !prevSecMiniNavButton)
    }

    return (
        <header>
            <img src={logo} alt="logo" className="logo" />
            <button onClick={toggleNavbar} className="button" >
                <img src={menuIcon} alt="menu icon"  className="openMenu" />
            </button>
            <nav className="mainNav navDesk" ref={navRef} >
                <button onClick={toggleNavbar} className="button" >
                    <img src={menuClose} alt="closing menu icon"  className="menuClose" />
                </button>
                <ul>
                    <li className="itemsStart" ><a onClick={toggleMiniNav} >Features</a>
                        <img src={miniNavButton? arrowUp: arrowDown}
                            alt="arrow icon"
                            className="arrow" />
                        {miniNavButton && <ul className="features" >
                            <li><img src={todoIcon} alt="todo icon" className="smimg" /><a href="#" >Todo List</a></li>
                            <li><img src={calenderIcon} alt="calendar icon" className="smimg" /><a href="#" >Calendar</a></li>
                            <li><img src={remindersIcon} alt="reminders icon" className="reminderimg smimg" /><a href="#" className="reminders" >Reminders</a></li>
                            <li><img src={planningIcon} alt="planning icon" className="smimg" /><a href="#" >Planning</a></li>
                        </ul>}
                    </li>
                    <li><a onClick={toggleMiniNavTwo} >Company</a>
                        <img src={secMiniNavButton? arrowUp: arrowDown} alt="arrow icon" className="arrow" />
                        {secMiniNavButton && <ul className="company" >
                            <li><a href="#" >History</a></li>
                            <li><a href="#" >Our Team</a></li>
                            <li><a href="#" >Blog</a></li>
                        </ul>}
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