import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardContainer } from './Styles';
import { setCart } from '../../../redux/cart/actions';



const Card = ({ name, price, img }) => {
    const { cart: { productsNumber } } = useSelector((state: any) => state);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(1);
    const [cartClass, setCartClass] = useState('');

    const addProduct = () => setAmount(amount + 1);
    const removeProduct = () => { if (amount > 1) setAmount(amount - 1) };

    const addToCart = () => {
        dispatch(setCart(productsNumber + amount));
        setCartClass('up-cart');
        setTimeout(() => { setCartClass('down-cart'); setAmount(1); }, 400);
    };


    return (
        <CardContainer img={img}>
            <div className="card-header"></div>
            <div className="card-body flex justify-center flex-col items-center">
                <p>{name}</p>
                <p>$ {price}</p>
            </div>
            <div className="card-shadow" >
                <div className="add-cart flex justify-center flex-col items-center">
                    <div>
                        <span onClick={removeProduct}>-</span>
                        <span >{amount}</span>
                        <span onClick={addProduct}>+</span>
                    </div>
                    <i onClick={addToCart} className={`fas fa-cart-plus ${cartClass}`}></i>
                </div>
            </div>
        </CardContainer>
    );
}

export default Card;