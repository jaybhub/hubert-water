import React, { Component } from 'react';

import moment from 'moment';
import axios from 'axios';

import '../styles/entryTable.css';

const Delivery = props => (
  <tr>
    <td>{moment.utc(props.delivery.date).format('MMM DD, YYYY')}</td>
    <td>{props.delivery.customerName}</td>
    <td>{props.delivery.loads}</td>
    <td className="money">
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(props.delivery.gross)}
    </td>
    <td className="money">
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(props.delivery.waterCost)}</td>
    <td className="money">
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(props.delivery.driverCost)}</td>
    <td>{props.delivery.driver}</td>
    <td>{props.delivery.saleType}</td>
    <td>{props.delivery.checkNumber}</td>
    <td className="money">
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(props.delivery.cash)}</td>
  </tr>
)


class RecentEntries extends Component {

  constructor(props) {
    super(props);
    this.state = { newEntry: [] };
  }

  componentDidMount() {
    axios.get('https://hubert-water.herokuapp.com/deliveries/')
      .then(response => {
        this.setState({ newEntry: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  deliveryList() {
    const reverseList = this.state.newEntry.reverse();
    const limitedList = reverseList.slice(0,7);
    return limitedList.map(function (currentDelivery, i) {
      return <Delivery delivery={currentDelivery} key={i} />;
    })
  }

  render() {
    return (
      <div>
        <table className="recent-entries-table">
          <thead>
            <tr>
              <th className="date">Date</th>
              <th className="customer">Customer Name</th>
              <th className="short">Loads</th>
              <th className="short">Gross</th>
              <th className="short">Water Cost</th>
              <th className="short">Driver Cost</th>
              <th className="short">Driver</th>
              <th className="short">Sale Type</th>
              <th className="short">Check Number</th>
              <th className="short">Cash</th>
            </tr>
          </thead>
          <tbody>
            {this.deliveryList()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default RecentEntries;