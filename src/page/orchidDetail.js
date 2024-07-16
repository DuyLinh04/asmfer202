import {
  CardContent,
  CardMedia,
  Typography,
  styled,
  Button,
  Divider,
} from '@mui/material';
import Card from '@mui/material/Card';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ADMIN_ACCOUNT } from '../constants';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const StyledCard = styled(Card)({
  // maxWidth: 345,
  maxWidth: 700,
  margin: '20px auto',
});

const StyledMedia = styled(CardMedia)({
  height: 400,
});

export default function Detail() {
  const { id } = useParams();
  const [orchids, setOrchids] = useState(null);
  const { email } = useSelector((state) => state.login.userInfo);

  useEffect(() => {
    axios
      .get(`https://669524ab4bd61d8314ca3810.mockapi.io/api/v1/hoalan/${id}`)
      .then((response) => {
        setOrchids(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const validationSchema = Yup.object({
    rating: Yup.string()
      .min(1, 'Must be more than 0 characters')
      .required('Required'),
    feedback: Yup.string()
      .min(2, 'Must be more than 1 characters')
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      rating: orchids ? orchids.rating : '',
      feedback: orchids ? orchids.feedback : '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (orchids) {
        axios
          .put(
            `https://669524ab4bd61d8314ca3810.mockapi.io/api/v1/hoalan/${orchids.id}`,
            {
              ...values,
              name: orchids.name,
              color: orchids.color,
              isSpecial: orchids.isSpecial,
              origin: orchids.origin,
              image: orchids.image,
              category: orchids.category,
              description: orchids.description,
            }
          )
          .then((response) => {
            setOrchids(response.data);
          })
          .catch((error) => {
            console.error('Error updating orchid:', error);
          });
      }
    },
    enableReinitialize: true,
  });

  if (!orchids) {
    return <div>Loading...</div>;
  }

  return (
    <StyledCard style={{ marginBottom: '700px' }}>
      <StyledMedia image={orchids.image} title={orchids.name} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          <h6>Name: {orchids.name}</h6>
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          <p>Color: {orchids.color}</p>
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          <p>Special: {orchids.isSpecial ? 'Special' : 'Not Special'}</p>
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          <p>Origin: {orchids.origin}</p>
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          <p>Category: {orchids.category}</p>
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          <p>Rating: {orchids.rating}</p>
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          <p>Price: {orchids.price} VND</p>
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          <p>Description: {orchids.description}</p>
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          <p>Feedback: {orchids.feedback}</p>
        </Typography>
        {email !== ADMIN_ACCOUNT && (
          <>
            <Divider />
            <form onSubmit={formik.handleSubmit}>
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
              <Button
                color='primary'
                variant='contained'
                fullWidth
                type='submit'
                style={{ marginBottom: '10px' }}
              >
                Submit
              </Button>
            </form>
          </>
        )}
      </CardContent>
      <Link to={'/'}>
        <Button
          color='primary'
          variant='contained'
          fullWidth
          type='submit'
          style={{ marginTop: '5px' }}
        >
          Back to Home
        </Button>
      </Link>
      <Link to={'/dashboard'}>
        <Button
          color='primary'
          variant='contained'
          fullWidth
          type='submit'
          style={{ marginTop: '5px' }}
        >
          Back to DashBoard
        </Button>
      </Link>
    </StyledCard>
  );
}
