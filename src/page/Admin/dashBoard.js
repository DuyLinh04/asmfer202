import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
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

export default function DashBoard() {
  const [orchids, setOrchids] = useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [currentOrchids, setcurrentOrchids] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { email } = useSelector((state) => state.login.userInfo);
  const isAdmin = email === ADMIN_ACCOUNT ? true : false;

  useEffect(() => {
    axios
      .get('https://669524ab4bd61d8314ca3810.mockapi.io/api/v1/hoalan')
      .then((response) => {
        setOrchids(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    setDeleteId(id);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (deleteId) {
      axios
        .delete(
          `https://669524ab4bd61d8314ca3810.mockapi.io/api/v1/hoalan/${deleteId}`
        )
        .then(() => {
          setOrchids((prevSections) =>
            prevSections.filter((orchid) => orchid.id !== deleteId)
          );
          setDeleteDialogOpen(false);
          setDeleteId(null); // clear the deleteId after successful delete
          alert('Orchid successfully deleted!'); // Show alert on successful delete
        })
        .catch((error) => {
          console.error('Error deleting orchid', error);
        });
    }
  };

  const handleCancelDelete = () => {
    setDeleteId(null);
    setDeleteDialogOpen(false);
  };

  const handleEdit = (orchid) => {
    setcurrentOrchids(orchid);
    setEditDialogOpen(true);
  };

  const handleCloseEdit = () => {
    setcurrentOrchids(null);
    setEditDialogOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      name: currentOrchids ? currentOrchids.name : '',
      image: currentOrchids ? currentOrchids.image : '',
      color: currentOrchids ? currentOrchids.color : '',
      origin: currentOrchids ? currentOrchids.origin : '',
      isSpecial: currentOrchids ? currentOrchids.isSpecial : false,
      category: currentOrchids ? currentOrchids.category : '',
      rating: currentOrchids ? currentOrchids.rating : '',
      description: currentOrchids ? currentOrchids.description : '',
      feedback: currentOrchids ? currentOrchids.feedback : '',
      price: currentOrchids ? currentOrchids.price : 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (currentOrchids) {
        axios
          .put(
            `https://669524ab4bd61d8314ca3810.mockapi.io/api/v1/hoalan/${currentOrchids.id}`,
            values
          )
          .then((response) => {
            setOrchids(
              orchids.map((orchid) =>
                orchid.id === currentOrchids.id ? response.data : orchid
              )
            );
            handleCloseEdit();
          })
          .catch((error) => {
            console.error('Error updating orchid:', error);
          });
      }
    },
    enableReinitialize: true,
  });

  return (
    <div style={{ marginTop: '20px' }}>
      <Typography variant='h6' style={{ marginLeft: '20px' }}>
        <Link to='/add' style={{ color: 'inherit', textDecoration: 'none' }}>
          <Button color='primary' variant='contained'>
            Add Orchid
          </Button>
        </Link>
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color='error'>{error}</Typography>
      ) : !isAdmin ? (
        <Typography color='error'>
          You are not have right to access this page!
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <h6>ID</h6>
                </TableCell>
                <TableCell>
                  <h6>Name</h6>
                </TableCell>
                <TableCell>
                  <h6>Color</h6>
                </TableCell>
                <TableCell>
                  <h6>isSpecial</h6>
                </TableCell>
                <TableCell>
                  <h6>Origin</h6>
                </TableCell>
                <TableCell>
                  <h6>Category</h6>
                </TableCell>
                <TableCell>
                  <h6>Rating</h6>
                </TableCell>
                <TableCell>
                  <h6>Price</h6>
                </TableCell>
                <TableCell>
                  <h6>Feedback</h6>
                </TableCell>
                <TableCell>
                  <h6>Image</h6>
                </TableCell>
                <TableCell>
                  <h6>Description</h6>
                </TableCell>
                <TableCell>
                  <h6>Action</h6>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orchids.map((orchid) => (
                <TableRow key={orchid.id}>
                  <TableCell>{orchid.id}</TableCell>
                  <TableCell>{orchid.name}</TableCell>
                  <TableCell>{orchid.color}</TableCell>
                  <TableCell>
                    {orchid.isSpecial ? 'Special' : 'Not Special'}
                  </TableCell>
                  <TableCell>{orchid.origin}</TableCell>
                  <TableCell>{orchid.category}</TableCell>
                  <TableCell>{orchid.rating}</TableCell>
                  <TableCell>{orchid.price}</TableCell>
                  <TableCell>{orchid.feedback}</TableCell>
                  <TableCell>
                    <img
                      src={orchid.image}
                      alt={orchid.name}
                      style={{ width: '200px', height: '100px' }}
                    />
                  </TableCell>
                  <TableCell>{orchid.description}</TableCell>
                  <TableCell>
                    <IconButton component={Link} to={`/detail/${orchid.id}`}>
                      <VisibilityIcon style={{ color: 'black' }} />
                    </IconButton>
                    <IconButton onClick={() => handleEdit(orchid)}>
                      <EditIcon style={{ color: 'green' }} />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(orchid.id)}>
                      <DeleteIcon style={{ color: 'red' }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Dialog open={deleteDialogOpen} onClose={handleCancelDelete}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this Orchid?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color='primary'>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={editDialogOpen} onClose={handleCloseEdit}>
        <DialogTitle>Edit Orchid</DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit} style={{ width: 500 }}>
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
        </DialogContent>
      </Dialog>
    </div>
  );
}
