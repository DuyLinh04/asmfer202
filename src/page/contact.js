import React from 'react';
import { Col, Container, Select, Textarea, TextInput } from 'react-materialize';
import CreateIcon from '@mui/icons-material/Create';
import { Button } from '@mui/material';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ width: '100%', marginTop: '65px', paddingBottom: '180px' }}>
      <Container>
        <Col style={{ width: '80%' }}>
          <div>
            <h3 style={{ color: 'Black' }}>Contact us</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <TextInput id='TextInput1' label='Your Name' />
            <TextInput id='TextInput2' label='Your Phone' />
            <TextInput email id='TextInput3' label='Email' validate />
            <Select
              id='Select1'
              multiple={false}
              onChange={function noRefCheck() {}}
              value=''
            >
              <option disabled value=''>
                Choose your favorite country
              </option>
              <option value='1'>Viet Nam</option>
              <option value='2'>England</option>
              <option value='3'>Malaysia</option>
            </Select>
            <Textarea
              icon={<CreateIcon />}
              id='Textarea1'
              label='Your content'
            />
            <Button color='primary' variant='contained'>
              Submit
            </Button>
          </form>
        </Col>
      </Container>
    </div>
  );
}
