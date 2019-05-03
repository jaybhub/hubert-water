import React, { Component } from 'react';

import '../styles/form.css';

import Input from './Input';
import Select from './Select';
import Button from './Button';

import axios from 'axios';

class DeliveryForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newEntry: {
        entryDate: new Date(),
        date: '',
        customerName: '',
        loads: '',
        gross: '',
        waterCost: '',
        driverCost: '',
        driver: '',
        saleType: '',
        checkNumber: '',
        cash: '',
      },

      paymentTypes: ['Cash', 'Check', 'Special Check']

    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInput(event) {
    let value = event.target.value;
    let name = event.target.name;
    this.setState(prevState => {
      return {
        newEntry: {
          ...prevState.newEntry, [name]: value
        }
      }
    }
    )
  }

  handleSubmit(event) {
    event.preventDefault();
    let currentEntry = this.state.newEntry;
    console.log("Submitted: " + JSON.stringify(currentEntry));
    
    axios.post('http://localhost:8888/deliveries/add', currentEntry)
            .then(res => console.log(res.data));

    alert('Record submitted!');
    this.handleReset(event);
  }

  
  handleReset(event) {
    console.log('Form Reset');
    event.preventDefault();
    this.setState({
      newEntry: {
        date: '',
        customerName: '',
        loads: '',
        gross: '',
        waterCost: '',
        driverCost: '',
        driver: '',
        saleType: '',
        checkNumber: '',
        cash: '',
      },
    })
  }

  handleDelete(event) {
    console.log("Entry deleted");
    event.preventDefault();
    alert('You will permanently delete this record');
    this.handleReset(event);
  }

  render() {
    return (
      <form className="delivery-form-container" onSubmit={this.handleSubmit}>

        {/* First Row */}
        <div className="delivery-first-row">
          {/* Date */}
          <Input
            type={'date'}
            title={'Date  '}
            name={'date'}
            style={{ width: 20 + 'ch' }}
            value={this.state.newEntry.date}
            handleChange={this.handleInput}
          />

          {/* Customer Name */}
          <Input
            type={'text'}
            title={'Customer Name  '}
            name={'customerName'}
            style={{ width: 50 + 'ch' }}
            value={this.state.newEntry.customerName}
            handleChange={this.handleInput}
          />

          {/* Loads */}
          <Input
            type={'number'}
            title={'Loads  '}
            name={'loads'}
            style={{ width: 10 + 'ch' }}
            value={this.state.newEntry.loads}
            handleChange={this.handleInput}
          />
        </div>

        {/* Second Row */}
        <div className="delivery-second-row">
          {/* Gross */}
          <Input
            type={'number'}
            title={'Gross  '}
            name={'gross'}
            style={{ width: 15 + 'ch' }}
            value={this.state.newEntry.gross}
            handleChange={this.handleInput}
          />

          {/* Water Cost */}
          <Input
            type={'number'}
            title={'Water Cost  '}
            name={'waterCost'}
            style={{ width: 15 + 'ch' }}
            value={this.state.newEntry.waterCost}
            handleChange={this.handleInput}
          />

          {/* Driver Cost */}
          <Input
            type={'number'}
            title={'Driver Cost  '}
            name={'driverCost'}
            style={{ width: 15 + 'ch' }}
            value={this.state.newEntry.driverCost}
            handleChange={this.handleInput}
          />

          {/* Driver */}
          <Input
            type={'text'}
            title={'Driver  '}
            name={'driver'}
            style={{ width: 20 + 'ch' }}
            value={this.state.newEntry.driver}
            handleChange={this.handleInput}
          />
        </div>

        {/* Third Row */}
        <div className="delivery-third-row">
          {/* Sale Type */}
          <Select
            title={'Sale Type  '}
            name={'saleType'}
            style={{ width: 20 + 'ch' }}
            options={this.state.paymentTypes}
            value={this.state.newEntry.saleType}
            placeholder={'Select Sale Type'}
            handleChange={this.handleInput}
          />

          {/* Check Number */}
          <Input
            type={'number'}
            title={'Check Number  '}
            name={'checkNumber'}
            style={{ width: 30 + 'ch' }}
            value={this.state.newEntry.checkNumber}
            handleChange={this.handleInput}
          />

          {/* Cash */}
          <Input
            type={'number'}
            title={'Cash  '}
            name={'cash'}
            style={{ width: 20 + 'ch' }}
            value={this.state.newEntry.cash}
            handleChange={this.handleInput}
          />
        </div>

        {/* Button Row */}
        <div className="delivery-button-row">

          {/* Delete Button */}
          <Button
            title={'Delete'}
            action={this.handleDelete}
          />

          {/* Reset Button */}
          <Button
            title={'Reset'}
            action={this.handleReset}
          />

          {/* Submit Button*/}
          <Button
            title={'Submit'}
            action={this.handleSubmit}
          />

        </div>
      </form>

    );
  }
}

export default DeliveryForm;