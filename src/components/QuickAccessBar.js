import React, { Component } from 'react';
import Button from './Button';
import QueryWindow from './QueryWindow';


class QuickAccessBar extends Component {

  constructor(props) {
    super(props);

    this.handleCustomerReport = this.handleCustomerReport.bind(this);
    this.handleAccountReport = this.handleAccountReport.bind(this);
    this.handleDriverReport = this.handleDriverReport.bind(this);
    this.handleTruckReport = this.handleTruckReport.bind(this);
    this.handleSalesReport = this.handleSalesReport.bind(this);
    this.handleCashReport = this.handleCashReport.bind(this);
    this.handleCheckReport = this.handleCheckReport.bind(this);

  }

    handleCustomerReport(event) {
      event.preventDefault();
      console.log("Created Customer Report");
      // alert('Report creation in development....');
    };

    handleAccountReport(event) {
      event.preventDefault();
      console.log("Created Account Report");
      alert('Report in development....');
    };

    handleDriverReport(event) {
      event.preventDefault();
      console.log("Created Driver Report");
      alert('Report in development....');
    };

    handleTruckReport(event) {
      event.preventDefault();
      console.log("Created Truck Report");
      alert('Report in development....');
    };

    handleSalesReport(event) {
      event.preventDefault();
      console.log("Created Sales Report");
      alert('Report in development....');
    };

    handleCashReport(event) {
      event.preventDefault();
      console.log("Created Cash Report");
      alert('Report in development....');
    };

    handleCheckReport(event) {
      event.preventDefault();
      console.log("Created Check Report");
      alert('Report in development....');
    };

    render() {
      return (
        <div className="quick-access-bar-container">

          {/* Quick Access Buttons */}
          <div className="quick-access-button-row">

            {/* Customer Report */}
            <QueryWindow
               title={'Customer Report'}
            />

            {/* Account Report*/}
            <Button
              title={'Account Report'}
              action={this.handleAccountReport}
            />

            {/* Driver Report */}
            <Button
              title={'Driver Report'}
              action={this.handleDriverReport}
            />

            {/* Truck Report */}
            <Button
              title={'Truck Report'}
              action={this.handleTruckReport}
            />

            {/* Sales Report */}
            <Button
              title={'Sales Report'}
              action={this.handleSalesReport}
            />

            {/* Cash Report */}
            <Button
              title={'Cash Report'}
              action={this.handleCashReport}
            />

            {/* Check Report */}
            <Button
              title={'Check Report'}
              action={this.handleCheckReport}
            />

            {/* Exit Button */}
            <Button
              title={'Exit'}
              action={this.handleExit}
            />
          </div>
        </div>
      );
    }
  }

  export default QuickAccessBar;