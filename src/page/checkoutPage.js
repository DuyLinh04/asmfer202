import { Alert, Button } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { createCheckout } from '../features/checkoutSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { clearCart } from '../features/cartSlice';

const CheckoutPage = () => {
  const { email, name } = useSelector((state) => state.login.userInfo);
  const location = useLocation();
  const query = location.search;
  const totalPrice = query.slice(12);
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be more than 2 characters')
      .required('Required'),
    phoneNumber: Yup.string()
      .length(10, 'Phone number must be 10 characters long')
      .required('Required'),
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Required'),
    address: Yup.string()
      .min(2, 'Address must be at least 2 characters long')
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      name: name ? name : '',
      phoneNumber: '',
      email: email ? email : '',
      address: '',
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(createCheckout({ ...values, totalPrice: parseInt(totalPrice) }));
      dispatch(clearCart());
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        navigate('/');
      }, 5000);
    },
  });

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {success && (
        <Alert severity='success' style={{ marginTop: 20, fontSize: 18 }}>
          Successfully place your order! You'll be return homepage in 5 seconds
        </Alert>
      )}
      <form
        onSubmit={formik.handleSubmit}
        style={{ width: 500, marginTop: 20, marginBottom: 40 }}
      >
        <div style={{ margin: '16px 0' }}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formik.values.name}
            onChange={formik.handleChange}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: 5,
              boxSizing: 'border-box',
              border:
                formik.touched.name && formik.errors.name
                  ? '1px solid red'
                  : '1px solid black',
            }}
          />
          {formik.touched.name && formik.errors.name && (
            <div style={{ color: 'red', marginTop: '4px' }}>
              {formik.errors.name}
            </div>
          )}
        </div>
        <div style={{ margin: '16px 0' }}>
          <label htmlFor='phoneNumber'>Phone Number</label>
          <input
            type='text'
            id='phoneNumber'
            name='phoneNumber'
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: 5,
              boxSizing: 'border-box',
              border:
                formik.touched.phoneNumber && formik.errors.phoneNumber
                  ? '1px solid red'
                  : '1px solid black',
            }}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div style={{ color: 'red', marginTop: '4px' }}>
              {formik.errors.phoneNumber}
            </div>
          )}
        </div>
        <div style={{ margin: '16px 0' }}>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: 5,
              boxSizing: 'border-box',
              border:
                formik.touched.email && formik.errors.email
                  ? '1px solid red'
                  : '1px solid black',
            }}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: 'red', marginTop: '4px' }}>
              {formik.errors.email}
            </div>
          )}
        </div>
        <div style={{ margin: '16px 0' }}>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            id='address'
            name='address'
            value={formik.values.address}
            onChange={formik.handleChange}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: 5,
              boxSizing: 'border-box',
              border:
                formik.touched.address && formik.errors.address
                  ? '1px solid red'
                  : '1px solid black',
            }}
          />
          {formik.touched.address && formik.errors.address && (
            <div style={{ color: 'red', marginTop: '4px' }}>
              {formik.errors.address}
            </div>
          )}
        </div>
        <p style={{ fontSize: 20 }}>Total Price Of Your Order: {totalPrice}</p>
        <Button
          color='primary'
          variant='contained'
          fullWidth
          type='submit'
          style={{ marginBottom: '10px' }}
        >
          Confirm Checkout
        </Button>
      </form>
    </div>
  );
};

export default CheckoutPage;
