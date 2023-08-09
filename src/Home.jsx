import { Link } from "react-router-dom";
import './styles/home.css'
import { useEffect, useState } from 'react';

export default function Home() {
    const [width, setWidth] = useState(window.innerWidth);
    function WindowSize() {
      useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
      return (
        <div className="screen"><u>Screen Width Is {width}px</u></div>
      )
    }
    return (
        <div className="home container">
            <div className="hero-section">{<img src="computer-organized.jpg" alt="Hero Picture" className="img"/>}<h2 className="home-title">Welcome to the Company Tech Sale!</h2></div>
            <div className="Links">
                <Link className="link-container" to='/brochure'>
                <div>
                    <div className="link-image"><img src="/in-person.jpg" alt="In Person"/></div>
                    <div className="link-title">In Person <br/> Brochure</div>
                </div>
                </Link>
                <Link className="link-container" to='/online-sale'>
                <div >
                    <div className="link-image"><img src="/online.jpg" alt="Online"/></div>
                    <div className="link-title">Online <br/>Store</div>
                </div>
                </Link>
                
            </div>
            <WindowSize />

        </div>
    );
}