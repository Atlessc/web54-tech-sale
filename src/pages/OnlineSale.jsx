import '../styles/online.css';
import '../styles/styles.css';
import ProductList from '../components/ProductList';

export default function OnlineSale() {
    return (
        <div className="online container">
            <h2>Online Sale</h2>
            <>
                <ProductList />
            </>
        </div>
    );
}