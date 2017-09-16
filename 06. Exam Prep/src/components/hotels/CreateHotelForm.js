import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Col, Button } from 'react-bootstrap';

const CreateHotelForm = (props) => (
  <Form horizontal>
    <FormGroup controlId='formHorizontalName'>
      <Col componentClass={ControlLabel} sm={2}>
        Name:
      </Col>
      <Col sm={10}>
        <FormControl
          type='text'
          placeholder='Name'
          name='name'
          value={props.hotel.name}
          onChange={props.onChange}
        />
      </Col>
    </FormGroup>

    <FormGroup controlId='formHorizontalLocation'>
      <Col componentClass={ControlLabel} sm={2}>
        Location:
      </Col>
      <Col sm={10}>
        <FormControl
          type='text'
          placeholder='Location'
          name='location'
          value={props.hotel.location}
          onChange={props.onChange}
        />
      </Col>
    </FormGroup>

    <FormGroup controlId='formHorizontalDescription'>
      <Col componentClass={ControlLabel} sm={2}>
        Description:
      </Col>
      <Col sm={10}>
        <FormControl
          type='textarea'
          placeholder='Description'
          name='description'
          value={props.hotel.description}
          onChange={props.onChange}
        />
      </Col>
    </FormGroup>

    <FormGroup controlId='formHorizontalRooms'>
      <Col componentClass={ControlLabel} sm={2}>
        Rooms:
      </Col>
      <Col sm={10}>
        <FormControl
          type='number'
          min='1'
          placeholder='Rooms'
          name='numberOfRooms'
          value={props.hotel.numberOfRooms}
          onChange={props.onChange}
        />
      </Col>
    </FormGroup>

    <FormGroup controlId='formHorizontalImage'>
      <Col componentClass={ControlLabel} sm={2}>
        Hotel Image:
      </Col>
      <Col sm={10}>
        <FormControl
          type='url'
          placeholder='Hotel Image'
          name='image'
          value={props.hotel.image}
          onChange={props.onChange}
        />
      </Col>
    </FormGroup>

    <FormGroup controlId='formHorizontalParkingSlots'>
      <Col componentClass={ControlLabel} sm={2}>
        Parking Slots:
      </Col>
      <Col sm={10}>
        <FormControl
          type='number'
          min='0'
          placeholder='Parking Slots'
          name='parkingSlots'
          value={props.hotel.parkingSlots}
          onChange={props.onChange}
        />
      </Col>
    </FormGroup>

    <span className="error-message">{props.error}</span>

    <FormGroup>
      <Col smOffset={3} sm={9} className='create-hotel-btn'>
        <Button type='submit' onClick={props.onSave}>
          Create Hotel
        </Button>
      </Col>
    </FormGroup>
  </Form>
);

export default CreateHotelForm;