import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../../../redux/cart/actions';
import { CardContainer } from './Styles';

const Card = ({ name, price, stars }: any) => {

  const dispatch = useDispatch();
  const { cart: { productsNumber } } = useSelector((state: any) => state);
  const [amount, setAmount] = useState(1);
  const addProduct = () => setAmount(amount + 1);
  const removeProduct = () => { if (amount > 1) setAmount(amount - 1) };

  const addToCart = () => {
    dispatch(setCart(productsNumber + amount));
    setAmount(1)
  };

  return (
    <CardContainer>
      <div className="card-header relative">
        <img className="product-image absolute" src="https://www.movilzona.es/app/uploads/2019/07/Galaxy-S10e-sin-fondo.png" alt="cellphone image" />
      </div>
      <div className="card-body relative">
        <p className='font-bold text-sm'>{name}</p>
        {stars?.map((ele: number, index: number) => <i key={`start-${index}`} className="fas fa-star"></i>)}
        <div>
          <div className='flex mt-2'>
            <div className='add-cart'>
              <span className='add-item' onClick={removeProduct}>-</span>
              <span className='add-item'>{amount}</span>
              <span className='add-item' onClick={addProduct}>+</span>
            </div>
            <i className="fas fa-cart-plus add-cart-icon relative" onClick={addToCart}></i>
          </div>
          <div className='cont-price rounded absolute'> ${price} </div>
        </div>
      </div>
    </CardContainer>
  );
}

export default Card;