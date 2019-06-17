import React from 'react'
//eslint-disable-next-line
import {BrowserRouter as Router, Link} from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
    return(
        <nav className='navigation'>
            <ul>
                <li><Link to="/">Конвертер валют</Link></li>
                <li><Link to="/currentcurrency">Курс валют</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation