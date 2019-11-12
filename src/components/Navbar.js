import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/categoria">
                            Categoria
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar