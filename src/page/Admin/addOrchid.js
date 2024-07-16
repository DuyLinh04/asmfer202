import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Container,
  Typography,
  Alert,
  AlertTitle,
} from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ADMIN_ACCOUNT } from '../../constants';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Must be more than 2 characters')
    .required('Required'),
  color: Yup.string()
    .min(3, 'Must be more than 2 characters')
    .required('Required'),
  isSpecial: Yup.boolean(),
  origin: Yup.string()
    .min(3, 'Must be more than 2 characters')
    .required('Required'),
  image: Yup.string().url('Must be valid URL').required('Required'),
  category: Yup.string()
    .min(2, 'Must be more than 1 characters')
    .required('Required'),
  rating: Yup.string()
    .min(1, 'Must be more than 0 characters')
    .required('Required'),
  description: Yup.string()
    .min(2, 'Must be more than 1 characters')
    .required('Required'),
  feedback: Yup.string()
    .min(2, 'Must be more than 1 characters')
    .required('Required'),
  price: Yup.number()
    .positive('The price must be greater than 0')
    .required('Required'),
});

export default function AddOrchid() {
  const [successAlert, setSuccessAlert] = useState(false);
  const { email } = useSelector((state) => state.login.userInfo);
  const isAdmin = email === ADMIN_ACCOUNT ? true : false;

  const formik = useFormik({
    initialValues: {
      name: '',
      color: '',
      isSpecial: false,
      origin: '',
      image: '',
      category: '',
      rating: '',
      description: '',
      feedback: '',
      price: 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios
        .post('https://669524ab4bd61d8314ca3810.mockapi.io/api/v1/hoalan', values)
        .then((response) => {
          console.log('Orchid added:', response.data);
          setSuccessAlert(true); // Show success alert
        })
        .catch((error) => {
          console.error('Error adding orchid:', error);
        });
    },
  });

  return (
    <Container maxWidth='sm' style={{ marginBottom: '700px' }}>
      <Typography variant='h4' component='h1' gutterBottom>
        Add Orchid
      </Typography>
      {successAlert && (
        <Alert severity='success' onClose={() => setSuccessAlert(false)}>
          <AlertTitle>Success</AlertTitle>
          Orchid added successfully!
        </Alert>
      )}
      {!isAdmin ? (
        <Typography color='error'>
          You are not have right to access this page!
        </Typography>
      ) : (
        <form onSubmit={formik.handleSubmit}>
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
            <label htmlFor='color'>Color</label>
            <input
              type='text'
              id='color'
              name='color'
              value={formik.values.color}
              onChange={formik.handleChange}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: 5,
                boxSizing: 'border-box',
                border:
                  formik.touched.color && formik.errors.color
                    ? '1px solid red'
                    : '1px solid black',
              }}
            />
            {formik.touched.color && formik.errors.color && (
              <div style={{ color: 'red', marginTop: '4px' }}>
                {formik.errors.color}
              </div>
            )}
          </div>
          <div style={{ margin: '16px 0' }}>
            <label htmlFor='origin'>Origin</label>
            <input
              type='text'
              id='origin'
              name='origin'
              value={formik.values.origin}
              onChange={formik.handleChange}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: 5,
                boxSizing: 'border-box',
                border:
                  formik.touched.origin && formik.errors.origin
                    ? '1px solid red'
                    : '1px solid black',
              }}
            />
            {formik.touched.origin && formik.errors.origin && (
              <div style={{ color: 'red', marginTop: '4px' }}>
                {formik.errors.origin}
              </div>
            )}
          </div>
          <div style={{ margin: '16px 0' }}>
            <label htmlFor='image'>Image URL</label>
            <input
              type='text'
              id='image'
              name='image'
              value={formik.values.image}
              onChange={formik.handleChange}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: 5,
                boxSizing: 'border-box',
                border:
                  formik.touched.image && formik.errors.image
                    ? '1px solid red'
                    : '1px solid black',
              }}
            />
            {formik.touched.image && formik.errors.image && (
              <div style={{ color: 'red', marginTop: '4px' }}>
                {formik.errors.image}
              </div>
            )}
          </div>
          <div style={{ margin: '16px 0' }}>
            <label htmlFor='category'>Category</label>
            <input
              type='text'
              id='category'
              name='category'
              value={formik.values.category}
              onChange={formik.handleChange}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: 5,
                boxSizing: 'border-box',
                border:
                  formik.touched.category && formik.errors.category
                    ? '1px solid red'
                    : '1px solid black',
              }}
            />
            {formik.touched.category && formik.errors.category && (
              <div style={{ color: 'red', marginTop: '4px' }}>
                {formik.errors.category}
              </div>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: '16px 0',
              gap: 8,
            }}
          >
            <input
              type='checkbox'
              id='isSpecial'
              name='isSpecial'
              checked={formik.values.isSpecial}
              onChange={formik.handleChange}
              style={{
                height: 20,
                width: 20,
                accentColor: 'blue',
                position: 'relative',
                opacity: 1,
                pointerEvents: 'visible',
              }}
            />
            <p htmlFor='isSpecial' style={{ marginRight: '8px' }}>
              Special
            </p>
          </div>
          <div style={{ margin: '16px 0' }}>
            <label htmlFor='rating'>Rating</label>
            <input
              type='text'
              id='rating'
              name='rating'
              value={formik.values.rating}
              onChange={formik.handleChange}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: 5,
                boxSizing: 'border-box',
                border:
                  formik.touched.rating && formik.errors.rating
                    ? '1px solid red'
                    : '1px solid black',
              }}
            />
            {formik.touched.rating && formik.errors.rating && (
              <div style={{ color: 'red', marginTop: '4px' }}>
                {formik.errors.rating}
              </div>
            )}
          </div>
          <div style={{ margin: '16px 0' }}>
            <label htmlFor='description'>Description</label>
            <input
              type='text'
              id='description'
              name='description'
              value={formik.values.description}
              onChange={formik.handleChange}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: 5,
                boxSizing: 'border-box',
                border:
                  formik.touched.description && formik.errors.description
                    ? '1px solid red'
                    : '1px solid black',
              }}
            />
            {formik.touched.description && formik.errors.description && (
              <div style={{ color: 'red', marginTop: '4px' }}>
                {formik.errors.description}
              </div>
            )}
          </div>
          <div style={{ margin: '16px 0' }}>
            <label htmlFor='feedback'>Feedback</label>
            <input
              type='text'
              id='feedback'
              name='feedback'
              value={formik.values.feedback}
              onChange={formik.handleChange}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: 5,
                boxSizing: 'border-box',
                border:
                  formik.touched.feedback && formik.errors.feedback
                    ? '1px solid red'
                    : '1px solid black',
              }}
            />
            {formik.touched.feedback && formik.errors.feedback && (
              <div style={{ color: 'red', marginTop: '4px' }}>
                {formik.errors.feedback}
              </div>
            )}
          </div>
          <div style={{ margin: '16px 0' }}>
            <label htmlFor='price'>Price</label>
            <input
              type='text'
              id='price'
              name='price'
              value={formik.values.price}
              onChange={formik.handleChange}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: 5,
                boxSizing: 'border-box',
                border:
                  formik.touched.price && formik.errors.price
                    ? '1px solid red'
                    : '1px solid black',
              }}
            />
            {formik.touched.price && formik.errors.price && (
              <div style={{ color: 'red', marginTop: '4px' }}>
                {formik.errors.price}
              </div>
            )}
          </div>
          <Button
            color='primary'
            variant='contained'
            fullWidth
            type='submit'
            style={{ marginBottom: '10px' }}
          >
            Submit
          </Button>

          <Link to={'/dashboard'}>
            <Button color='primary' variant='contained' fullWidth>
              Back to DashBoard
            </Button>
          </Link>
        </form>
      )}
    </Container>
  );
}
