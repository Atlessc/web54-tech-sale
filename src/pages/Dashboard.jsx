import AddProductForm from "../components/addProductForm";
import { useState } from 'react';
import '../styles/styles.css'

export default function Dashboard() {

    const [showAddProductForm, setShowAddProductForm] = useState(false);

    const ToggleViewAddProductForm = () => {
        setShowAddProductForm(!showAddProductForm);
        console.log(showAddProductForm)
    }

    return (
        <div className="dashboard container">
            <h2>Dashboard</h2>
            <button onClick={ToggleViewAddProductForm}>
                <div>Add Product</div>
            </button>
            {showAddProductForm ?
            <div className="dialog">
                <div onClick={ToggleViewAddProductForm} className="close-form">X</div>
                <AddProductForm />
            </div>
            :
            null
    }
        </div>
    );
}
