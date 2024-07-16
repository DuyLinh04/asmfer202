import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer
      variant='h6'
      style={{
        backgroundColor: 'orange',
        paddingTop: '10px',
        paddingBottom: '10px',
      }}
    >
      <Container style={{ backgroundColor: 'orange' }}>
        <Typography
          variant='body2'
          align='center'
          style={{ fontWeight: 'bold' }}
        >
          Copyright ©2015, Orchids Flowers, All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
