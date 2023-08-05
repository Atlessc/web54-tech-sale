import React, { useState } from 'react';
import data from '../data/ProductTest.json';
import '../styles/ProductList.css'

const ProductList = () => {
  const [showInfo, setShowInfo] = useState(Array(data.length).fill(false));
	const [buttonFunc, setButtonFunc] = useState(true);

	const checkAvailability = (quantity) => {
		if (quantity > 0) {
			return 'available';
		} else {
			return 'unavailable';
		}
	};

	const Unavailable = (quantity) =>{
		if (quantity > 0) {
			setButtonFunc(true);
		} else {
			setButtonFunc(false);
		}
	};


  const products = data.map((product, index) => {
    const { id, brand, name, screen, cpu, ram, storage, price, quantity, image } = product;
    return (
      <div key={id} className={"product-card "+(checkAvailability(quantity))}>
        <img src={image} alt={name} />
        <div className='product-brand'>{brand}</div>
        <div className='product-name'>{name}</div>
        <div className='product-price'>${price}</div>
        {showInfo[index] && (
          <div className='product-extra-info'>
            <div className='extra-info-item'><b>CPU:</b> {cpu}</div>
            <div className='extra-info-item'><b>RAM:</b> {ram}</div>
            <div className='extra-info-item'><b>Storage:</b> {storage}</div>
            <div className='extra-info-item'><b>Screen:</b> {screen}"</div>
            <div className='extra-info-item'><b>Quantity:</b> {quantity}</div>
          </div>
        )}
        <button className={"show-more-button"+(checkAvailability(quantity))} onClick={() => {
          const newShowInfo = [...showInfo];
          newShowInfo[index] = !newShowInfo[index];
          setShowInfo(newShowInfo);
        }} disabled={quantity<= 0}>
          {showInfo[index] ? 'Show Less' : 'Show More'}
        </button>
      </div>
    );
  });

  return (
    <div className='product-list'>
      {products}
    </div>
  );
};

export default ProductList;
