import '../styles/brochure.css';
import '../styles/styles.css';
import ProductList from '../components/ProductList';

export default function InPersonBrochure() {
    return (
        <div className="brochure container">
            <h2>In-Person Brochure</h2>
                <ProductList />
        </div>
    );
}