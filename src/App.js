import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';


import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<CartContext.Provider value={cart}>
				<Navigation />


				<ProductContext.Provider value={{ products, addItem }}>
					<Route exact path="/">
						<Products products={products} addItem={addItem} />
					</Route>
				</ProductContext.Provider>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
			</CartContext.Provider>
		</div>
	);
}

export default App;
