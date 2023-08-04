import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import '../styles/nav.css'

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const ToggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen)
    }

    return (
        <div className="NavBar">
            <div className='nav-title'>Adi-Tech Sale</div>
            <div className='nav-menu-btn' onClick={ToggleMenu}>Menu</div>
            {menuOpen ?
            <div className='nav-list-container'>
                <div onClick={ToggleMenu} className='nav-close-btn'><div>X</div></div>
            <div className='nav-list'>
                <Link to="/" className='nav-item' onClick={ToggleMenu}>Home</Link>
                <Link to="/brochure" className='nav-item' onClick={ToggleMenu}>In-Person Brochure</Link>
                <Link to="/online-sale" className='nav-item' onClick={ToggleMenu}>Online Sale</Link>
                <Link to="/dashboard" className='nav-item' onClick={ToggleMenu}>Dashboard</Link>
            </div> 
            </div>
            : null}
        </div>
    );
}
