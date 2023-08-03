import { useState } from 'react';
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
                <div className='nav-item'>Home</div>
                <div className='nav-item'>In-Person Brochure</div>
                <div className='nav-item'>Online Sale</div>
            </div>
            </div>
            : null}
        </div>
    );
}