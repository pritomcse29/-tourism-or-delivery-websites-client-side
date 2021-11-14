import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb } from '../../utilities/fakedb';


import './Home.css';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart();
    // products to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('https://stark-plains-49197.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, []);



    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);

    }

    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }

    return (

        <div>
            <img src="https://image.freepik.com/free-psd/top-view-free-food-delivery-arrangement-with-mock-up_23-2148421291.jpg" style={{ width: "100%" }}></img>


            <div className="Home-container">
                <h2 className="text-center">Foods:</h2>
                <hr />
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >
                        </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className="btn-regular">Review Your Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
            <div>
                <Contact></Contact>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Home;