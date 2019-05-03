import React, { Component } from 'react';
import Popup from 'reactjs-popup';

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

class QueryWindow extends Component {

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
    const filteredList = this.state.newEntry.filter(item => item.customerName.toLowerCase().includes('hubert'))
    return filteredList.map(function (currentDelivery, i) {
      return <Delivery delivery={currentDelivery} key={i} />;
    })
  }

  render() {
    return (
      <Popup trigger={<button>Hubert Report</button>}
        modal
        closeOnDocumentClick
      >
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
    </Popup>
    )

  }
}

export default QueryWindow;