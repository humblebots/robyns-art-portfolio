import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/colored-pencils">Colored Pencils</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/gouache">Gouache</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/acrylic">Acrylic</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/other">Other</Link></li>
            </ul>
            <ul className="actions vertical">
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
