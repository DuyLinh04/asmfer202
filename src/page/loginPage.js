import React, { useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Paper, Divider } from '@mui/material';
import { styled } from '@mui/system';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/loginSlice';

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
}));

const LoginIcon = styled(LockOutlinedIcon)(({ theme }) => ({
  height: 80,
  width: 80,
  margin: theme.spacing(1),
  backgroundColor: 'blue',
  padding: theme.spacing(2),
  borderRadius: '50%',
  color: 'white',
}));

const BackgroundBox = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage:
    'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQllKzu2rsSpbOIZdGwZvvRgezqtVCVsLBj1xBlJCmy0qjII8Nj)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const LogoImage = styled('img')({
  width: '150px',
  marginBottom: '20px',
});

const LoginPage = () => {
  const { email } = useSelector((state) => state.login.userInfo);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    const credentialInfo = credentialResponse.credential;
    const decode = jwtDecode(credentialInfo);
    if (!email) {
      dispatch(loginUser(decode));
      navigate('/');
    }
  };

  useEffect(() => {
    if (email) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [email, navigate]);

  return (
    <Box
      position='relative'
      style={{
        height: '90vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BackgroundBox />
      <Container component='main' maxWidth='xs'>
        <StyledPaper elevation={6}>
          <LogoImage
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQllKzu2rsSpbOIZdGwZvvRgezqtVCVsLBj1xBlJCmy0qjII8Nj'
            alt='Company Logo'
          />
          <LoginIcon />
          <Typography component='h1' variant='h5'>
            Đăng nhập với tài khoản Google
          </Typography>
          <Box
            mt={3}
            mb={3}
            width='100%'
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            {!email ? (
              <GoogleLogin
                onSuccess={handleSuccess}
                onError={() => {
                  console.log('Đăng nhập thất bại, có lỗi xảy ra');
                }}
              />
            ) : (
              <Typography>
                Bạn đã đăng nhập rồi, tự động chuyển hướng về trang chủ sau 3
                giây.
              </Typography>
            )}
          </Box>
          <Divider variant='middle' style={{ width: '100%' }} />
          <Box mt={3}>
            <Typography variant='body2' color='textSecondary' align='center'>
              Bằng cách đăng nhập, bạn đồng ý với các điều khoản và điều kiện
              của chúng tôi.
            </Typography>
          </Box>
        </StyledPaper>
      </Container>
    </Box>
  );
};

export default LoginPage;
