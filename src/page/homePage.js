import {
  CardMedia,
  Typography,
  styled,
  Button,
  Card,
  CardContent,
  Rating,
  CircularProgress,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { ADMIN_ACCOUNT } from '../constants';

const Root = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  padding: '20px',
});

const StyleCard = styled(Card)({
  width: '300px',
  margin: '20px auto',
});

const StyleMedia = styled(CardMedia)({
  height: 140,
});

const Home = () => {
  const [orchids, setOrchids] = useState([]);
  const [filteredOrchids, setFilteredOrchids] = useState([]);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.login.userInfo);

  useEffect(() => {
    axios
      .get('https://669524ab4bd61d8314ca3810.mockapi.io/api/v1/hoalan')
      .then((response) => {
        console.log(response);
        const sortedOrchids = response.data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setOrchids(sortedOrchids);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const lowercaseOrchids = search.toLowerCase();
    const filteredOrchid = orchids.filter((orchid) => {
      return orchid.name.toLowerCase().includes(lowercaseOrchids);
    });

    setFilteredOrchids(filteredOrchid);
  }, [orchids, search]);

  return (
    <div>
      <Typography
        variant='h4'
        component='h1'
        gutterBottom
        style={{ textAlign: 'center', marginTop: '30px', color: 'Blue' }}
      >
        Orchids Flowers
      </Typography>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          justifyContent: 'center',
        }}
      >
        <input
          style={{ height: 40, width: 400, padding: '0 10px' }}
          placeholder='Enter orchid name to search'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <Root>
        {orchids.length === 0 ? (
          <div style={{ height: 500, display: 'flex', alignItems: 'center' }}>
            <CircularProgress />
          </div>
        ) : (
          filteredOrchids?.map((orchid) => (
            <StyleCard key={orchid.id}>
              <StyleMedia
                image={orchid.image}
                style={{ width: '100%', height: '200px' }}
                title={orchid.name}
              />
              <CardContent>
                <h5>{orchid.name}</h5>
                <p>{orchid.color}</p>
                <p>{orchid.isSpecial ? 'Special' : 'Not Special'}</p>
                <p
                  style={{ color: 'red', fontSize: 24 }}
                >{`${orchid.price} VND`}</p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <Rating
                    value={parseFloat(orchid.rating)}
                    precision={0.5}
                    readOnly
                  />
                  <p>{orchid.rating}</p>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <Link to={`/detail/${orchid.id}`}>
                    <Button variant='contained'>Detail</Button>
                  </Link>
                  {email !== ADMIN_ACCOUNT && (
                    <Button
                      variant='contained'
                      onClick={() => {
                        dispatch(addToCart({ ...orchid, amount: 1 }));
                      }}
                    >
                      Add to cart
                    </Button>
                  )}
                </div>
              </CardContent>
            </StyleCard>
          ))
        )}
      </Root>
    </div>
  );
};

export default Home;
