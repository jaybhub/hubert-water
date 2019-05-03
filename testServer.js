// var express = require('express');
// var app = express();
// var mongoose = require('mongoose');
// var bodyParser = require('body-parser');
// var methodOverride = require('method-override');
// var cors = require('cors');

// mongoose.connect('mongodb://localhost:27017/deliveries', { useNewUrlParser: true });

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {

// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 8000;
// }
// app.listen(port);


//   // Schema
//   var DeliverySchema = new mongoose.Schema({
//     entryDate: Date,
//     date: Date,
//     customerName: String,
//     loads: Number,
//     gross: Number,
//     waterCost: Number,
//     driverCost: Number,
//     driver: String,
//     saleType: String,
//     checkNumber: Number,
//     cash: Number,
//   });

//   // Model
//   var Delivery = mongoose.model('Delivery', DeliverySchema);

//   var deliveryOne = new Delivery({
//     entryDate: new Date(),
//     date: '2018-12-25',
//     customerName: 'Santa Clause',
//     loads: 12,
//     gross: 1200,
//     waterCost: 500,
//     driverCost: 500,
//     driver: 'RAH',
//     saleType: 'Cash',
//     checkNumber: 0,
//     cash: 1200
//   });
//   deliveryOne.save(function (err) {
//     if (err) return handleError(err);
//   });
//   console.log(deliveryOne.customerName); // 'Santa Clause'


//   Delivery.find(function (err, deliveries) {
//     if (err) return console.error(err);
//     console.log(deliveries);
//   })

//   console.log("we're connected!");
// });