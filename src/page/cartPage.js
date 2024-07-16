import { Box, Button, Divider, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../features/cartSlice';
import { Link } from 'react-router-dom';

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const handleChangeAmount = (e) => {
    const numericValue = parseInt(e.target.value);

    if (numericValue >= 1) {
      dispatch(
        addToCart({ ...cartItem, amount: numericValue - cartItem.amount })
      );
    }
  };
  const handleIncreaseAmount = () => {
    dispatch(addToCart({ ...cartItem, amount: 1 }));
  };
  const handleDecreaseAmount = () => {
    if (cartItem.amount > 1) {
      dispatch(addToCart({ ...cartItem, amount: -1 }));
    } else if (cartItem.amount === 1) {
      dispatch(removeFromCart(cartItem));
    }
  };

  return (
    <>
      <Divider />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            width: 150,
            display: 'flex',
            justifyContent: 'center',
            flexGrow: 1,
          }}
        >
          <img
            src={cartItem.image}
            alt='Orchid in Cart'
            style={{ height: 100, width: 100 }}
          />
        </div>
        <Typography
          style={{ width: 250, fontSize: 18, textAlign: 'center', flexGrow: 1 }}
        >
          {cartItem.name}
        </Typography>
        <Typography
          style={{ width: 150, fontSize: 18, textAlign: 'center', flexGrow: 1 }}
        >
          {cartItem.color}
        </Typography>
        <Typography
          style={{ width: 200, fontSize: 18, textAlign: 'center', flexGrow: 1 }}
        >
          {cartItem.category}
        </Typography>
        <Typography
          style={{ width: 200, fontSize: 18, textAlign: 'center', flexGrow: 1 }}
        >
          {cartItem.price}
        </Typography>
        <Box
          style={{
            display: 'flex',
            height: 40,
            alignItems: 'center',
            gap: 24,
            width: 250,
            justifyContent: 'center',
            flexGrow: 1,
          }}
        >
          <button
            style={{ height: '100%', width: 40, fontSize: 18 }}
            onClick={handleDecreaseAmount}
          >
            -
          </button>
          <input
            type='text'
            value={cartItem.amount}
            style={{
              height: '100%',
              width: 40,
              padding: '0 12px',
              fontSize: 18,
            }}
            onChange={handleChangeAmount}
          />
          <button
            style={{ height: '100%', width: 40, fontSize: 18 }}
            onClick={handleIncreaseAmount}
          >
            +
          </button>
        </Box>
      </div>
    </>
  );
};

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const totalAmount = cartItems.reduce((accumulator, curCartItem) => {
    return accumulator + curCartItem.amount;
  }, 0);
  const totalPrice = cartItems.reduce((accumulator, curCartItem) => {
    return accumulator + curCartItem.amount * curCartItem.price;
  }, 0);

  return (
    <div style={{ height: '90vh' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: 10,
          marginLeft: 30,
          marginRight: 30,
        }}
      >
        <Typography
          style={{ width: 150, fontSize: 24, textAlign: 'center', flexGrow: 1 }}
        >
          Image
        </Typography>
        <Typography
          style={{ width: 250, fontSize: 24, textAlign: 'center', flexGrow: 1 }}
        >
          Orchid's name
        </Typography>
        <Typography
          style={{ width: 150, fontSize: 24, textAlign: 'center', flexGrow: 1 }}
        >
          Color
        </Typography>
        <Typography
          style={{ width: 200, fontSize: 24, textAlign: 'center', flexGrow: 1 }}
        >
          Category
        </Typography>
        <Typography
          style={{ width: 200, fontSize: 24, textAlign: 'center', flexGrow: 1 }}
        >
          Price
        </Typography>
        <Typography
          style={{ width: 250, fontSize: 24, textAlign: 'center', flexGrow: 1 }}
        >
          Amount
        </Typography>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          margin: 30,
        }}
      >
        {cartItems?.map((cartItem, index) => {
          return <CartItem key={index} cartItem={cartItem} />;
        })}
      </div>
      <Divider />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'end',
          marginRight: 30,
        }}
      >
        <p style={{ fontSize: 24, marginBottom: 0 }}>
          Total amount: {totalAmount} orchids
        </p>
        <p style={{ fontSize: 24 }}>Total price: {totalPrice} VND</p>
        <Link to={`/checkout?totalPrice=${totalPrice}`}>
          <Button variant='contained'>Go To Checkout</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
