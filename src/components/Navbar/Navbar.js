import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to="/" className="link">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/categoria" className="link">
                        Categoria
                    </Link>
                </li>
            </ul>
        )
    }
}

export default Navbar