import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Grid, Box, Button } from '@mui/material';
import DashBoard from './page/Admin/dashBoard';
import Home from './page/homePage';
import Contact from './page/contact';
import Detail from './page/orchidDetail';
import AddOrchid from './page/Admin/addOrchid';
import AboutPage from './page/aboutPage';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PhoneIcon from '@mui/icons-material/Phone';
import InfoIcon from '@mui/icons-material/Info';
import NewsPage from './page/newsPage';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import LoginPage from './page/loginPage';
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from './features/loginSlice';
import { ADMIN_ACCOUNT } from './constants';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartPage from './page/cartPage';
import CheckoutPage from './page/checkoutPage';
import ManageNews from './page/Admin/manageNews';
import ManageCheckout from './page/Admin/manageCheckout';

export default function App() {
  const { email } = useSelector((state) => state.login.userInfo);
  const dispatch = useDispatch();

  return (
    <Router>
      <AppBar position='static'>
        <Toolbar
          style={{ backgroundColor: 'orange', justifyContent: 'center' }}
        >
          <Grid container justifyContent='center'>
            <Grid item>
              <Typography
                variant='h6'
                style={{ marginLeft: '20px', fontWeight: 'bold' }}
              >
                <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>
                  <Box display='flex' alignItems='center'>
                    <HomeIcon style={{ marginRight: '5px' }} />
                    Home
                  </Box>
                </Link>
              </Typography>
            </Grid>

            {email === ADMIN_ACCOUNT && (
              <Grid item>
                <Typography
                  variant='h6'
                  style={{ marginLeft: '20px', fontWeight: 'bold' }}
                >
                  <Link
                    to='/dashboard'
                    style={{ color: 'black', textDecoration: 'none' }}
                  >
                    <Box display='flex' alignItems='center'>
                      <ListAltIcon style={{ marginRight: '5px' }} />
                      Dashboard
                    </Box>
                  </Link>
                </Typography>
              </Grid>
            )}

            {email === ADMIN_ACCOUNT && (
              <Grid item>
                <Typography
                  variant='h6'
                  style={{ marginLeft: '20px', fontWeight: 'bold' }}
                >
                  <Link
                    to='/manage-checkout'
                    style={{ color: 'black', textDecoration: 'none' }}
                  >
                    <Box display='flex' alignItems='center'>
                      <ListAltIcon style={{ marginRight: '5px' }} />
                      Manage Checkout
                    </Box>
                  </Link>
                </Typography>
              </Grid>
            )}

            {email === ADMIN_ACCOUNT && (
              <Grid item>
                <Typography
                  variant='h6'
                  style={{ marginLeft: '20px', fontWeight: 'bold' }}
                >
                  <Link
                    to='/manage-news'
                    style={{ color: 'black', textDecoration: 'none' }}
                  >
                    <Box display='flex' alignItems='center'>
                      <ListAltIcon style={{ marginRight: '5px' }} />
                      Manage news
                    </Box>
                  </Link>
                </Typography>
              </Grid>
            )}

            {email !== ADMIN_ACCOUNT && (
              <Grid item>
                <Typography
                  variant='h6'
                  style={{ marginLeft: '20px', fontWeight: 'bold' }}
                >
                  <Link
                    to='/contact'
                    style={{ color: 'black', textDecoration: 'none' }}
                  >
                    <Box display='flex' alignItems='center'>
                      <PhoneIcon style={{ marginRight: '5px' }} />
                      Contact
                    </Box>
                  </Link>
                </Typography>
              </Grid>
            )}

            {email !== ADMIN_ACCOUNT && (
              <Grid item>
                <Typography
                  variant='h6'
                  style={{ marginLeft: '20px', fontWeight: 'bold' }}
                >
                  <Link
                    to='/about'
                    style={{ color: 'black', textDecoration: 'none' }}
                  >
                    <Box display='flex' alignItems='center'>
                      <InfoIcon style={{ marginRight: '5px' }} />
                      About
                    </Box>
                  </Link>
                </Typography>
              </Grid>
            )}

            {email !== ADMIN_ACCOUNT && (
              <Grid item>
                <Typography
                  variant='h6'
                  style={{ marginLeft: '20px', fontWeight: 'bold' }}
                >
                  <Link
                    to='/news'
                    style={{ color: 'black', textDecoration: 'none' }}
                  >
                    <Box display='flex' alignItems='center'>
                      <NewspaperIcon style={{ marginRight: '5px' }} />
                      News
                    </Box>
                  </Link>
                </Typography>
              </Grid>
            )}

            {email !== ADMIN_ACCOUNT && (
              <Grid item>
                <Typography
                  variant='h6'
                  style={{ marginLeft: '20px', fontWeight: 'bold' }}
                >
                  <Link
                    to='/cart'
                    style={{ color: 'black', textDecoration: 'none' }}
                  >
                    <Box display='flex' alignItems='center'>
                      <ShoppingCartIcon style={{ marginRight: '5px' }} />
                      Cart
                    </Box>
                  </Link>
                </Typography>
              </Grid>
            )}

            <Grid item>
              <Typography
                variant='h6'
                style={{ marginLeft: '20px', fontWeight: 'bold' }}
              >
                {!email ? (
                  <Link
                    to='/login'
                    style={{ color: 'black', textDecoration: 'none' }}
                  >
                    <Box display='flex' alignItems='center'>
                      <PersonIcon style={{ marginRight: '5px' }} />
                      Login
                    </Box>
                  </Link>
                ) : (
                  <Button
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                    style={{
                      color: 'black',
                      height: 30,
                      padding: 0,
                      fontWeight: 'inherit',
                      fontSize: 'inherit',
                      textTransform: 'none',
                    }}
                  >
                    <Box
                      display='flex'
                      alignItems='center'
                      style={{ height: 30 }}
                    >
                      <PersonIcon style={{ marginRight: '5px' }} />
                      Logout
                    </Box>
                  </Button>
                )}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/add' element={<AddOrchid />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/manage-checkout' element={<ManageCheckout />} />
        <Route path='/manage-news' element={<ManageNews />} />
      </Routes>
    </Router>
  );
}
