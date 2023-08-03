// import AddProductForm from "../components/addProductForm";
import { useState } from 'react';

export default function Dashboard() {

    const [showAddProductForm, setShowAddProductForm] = useState(false);

    const ToggleViewAddProductForm = () => {
        setShowAddProductForm(!showAddProductForm);
    }

    return (
        <div className="dashboard container">
            <h2>Dashboard</h2>
            <button onClick={ToggleViewAddProductForm}>
                <div>Add Product</div>
            </button>
            {showAddProductForm ? null :
            <dialog>
                <div onClick={ToggleViewAddProductForm}>X</div>
                {/* <AddProductForm /> */}
            </dialog>
    }
        </div>
    );
}
