const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Port = 8888;

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/deliveries', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.get('/ping', (req, res) => {
   res.send('pong')
})

app.listen(process.env.PORT || Port, function() {
    console.log("Server is running on Port: ", (process.env.PORT || Port));
});

const deliveryRoutes = express.Router();
app.use('/deliveries', deliveryRoutes);

let DeliverySchema = new Schema({
        entryDate: Date,
        date: Date,
        customerName: String,
        loads: Number,
        gross: Number,
        waterCost: Number,
        driverCost: Number,
        driver: String,
        saleType: String,
        checkNumber: Number,
        cash: Number,
      });

const Delivery = mongoose.model('Delivery', DeliverySchema);

deliveryRoutes.route('/').get(function(req, res) {
    Delivery.find(function(err, deliveries) {
        if (err) {
            console.log(err);
        } else {
            res.json(deliveries);
        }
    });
});

deliveryRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Delivery.findById(id, function(err, deliveries) {
        res.json(deliveries);
    });
});

deliveryRoutes.route('/add').post(function(req, res) {
    let delivery = new Delivery(req.body);
    delivery.save()
        .then(delivery => {
            res.status(200).json({'delivery': 'delivery added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new delivery failed');
        });
});

deliveryRoutes.route('/update/:id').post(function(req, res) {
    Delivery.findById(req.params.id, function(err, delivery) {
        if (!delivery)
            res.status(404).send("Record was not found");
        else
            delivery.date = req.body.date;
            delivery.customerName = req.body.customerName;
            delivery.loads = req.body.loads;
            delivery.gross = req.body.gross;
            delivery.waterCost = req.body.waterCost;
            delivery.driverCost = req.body.driverCost;
            delivery.driver = req.body.driver;
            delivery.saleType = req.body.saleType;
            delivery.checkNumber = req.body.checkNumber;
            delivery.cash = req.body.cash;

            delivery.save().then(delivery => {
                res.json('Record updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});