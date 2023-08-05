import { Link } from "react-router-dom";
import './styles/styles.css'
import './styles/home.css'


export default function Home() {
    return (
        <div className="home container">
            <h2 className="home-title">Welcome to the Company Tech Sale!</h2>
            <div className="home hero">{<img src="computer-organized.jpg" alt="Hero Picture"/>}</div>
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
        </div>
    );
}