require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const {HoldingsModel}= require('./models/HoldingsModel');
const {PositionsModel}= require('./models/PositionsModel');
const {OrdersModel}= require('./models/OrdersModel');


const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(URL)
const startServer = async () => {
  try {
    await mongoose.connect(URL);
    console.log('MongoDB connected successfully');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.log('MongoDB connection error:', err);
  }
};

startServer();


// // app.get('/addHoldings', async(req, res) => {
//     let tempHoldings = [
//    {
//     name: "INFY",
//     qty: 10,
//     avg: 1400,
//     price: 1450,
//     net: "+500",
//     day: "+120",
//     isLoss: false,
//   },
//   {
   
//     name: "TCS",
//     qty: 5,
//     avg: 3300,
//     price: 3200,
//     net: "-500",
//     day: "-80",
//     isLoss: true,
//   },
//   {
   
//     name: "RELIANCE",
//     qty: 8,
//     avg: 2500,
//     price: 2525,
//     net: "+200",
//     day: "+50",
//     isLoss: false,
//   },
//   {
   
//     name: "HDFCBANK",
//     qty: 12,
//     avg: 1700,
//     price: 1680,
//     net: "-240",
//     day: "-30",
//     isLoss: true,
//   },
//   {

//     name: "ICICIBANK",
//     qty: 15,
//     avg: 920,
//     price: 945,
//     net: "+375",
//     day: "+40",
//     isLoss: false,
//   },
//   {
 
//     name: "SBIN",
//     qty: 20,
//     avg: 620,
//     price: 615,
//     net: "-100",
//     day: "-15",
//     isLoss: true,
//   },
//   {
 
//     name: "ITC",
//     qty: 25,
//     avg: 430,
//     price: 435,
//     net: "+125",
//     day: "+10",
//     isLoss: false,
//   },
//   {
   
//     name: "AXISBANK",
//     qty: 10,
//     avg: 1030,
//     price: 1020,
//     net: "-100",
//     day: "-15",
//     isLoss: true,
//   },
//   {

//     name: "LT",
//     qty: 5,
//     avg: 3600,
//     price: 3620,
//     net: "+100",
//     day: "+30",
//     isLoss: false,
//   },
//   {
    
//     name: "MARUTI",
//     qty: 3,
//     avg: 11000,
//     price: 10950,
//     net: "-150",
//     day: "-40",
//     isLoss: true,
//   },
//   {
   
//     name: "HINDUNILVR",
//     qty: 7,
//     avg: 2450,
//     price: 2470,
//     net: "+140",
//     day: "+20",
//     isLoss: false,
//   },
//   {
   
//     name: "BHARTIARTL",
//     qty: 10,
//     avg: 850,
//     price: 865,
//     net: "+150",
//     day: "+25",
//     isLoss: false,
//   },
// ];

// tempHoldings.forEach((item)=>{
// let newHolding= new HoldingsModel({
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
// });

// newHolding.save();
// });
// res.send('done!!');

// });

// app.get('/addPositions', async(req, res)=>{
// let tempPositions = [
//   {
//     product: "CNC",
//     name: "INFY",
//     qty: 10,
//     avg: 1400,
//     price: 1450,
//     net: "+500",
//     day: "+120",
//     isLoss: false,
//   },
//   {
//     product: "MIS",
//     name: "TCS",
//     qty: 5,
//     avg: 3300,
//     price: 3200,
//     net: "-500",
//     day: "-80",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "RELIANCE",
//     qty: 8,
//     avg: 2500,
//     price: 2525,
//     net: "+200",
//     day: "+50",
//     isLoss: false,
//   },
 
// ];

// tempPositions.forEach((item)=>{
//     let newPosition = new PositionsModel({
//     product: item.product,
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     isLoss: item.isLoss,
//     });

//     newPosition.save();
// });
// res.send('positions added!!')
// });

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


app.get('/allHoldings', async(req, res)=>{
   let allHoldings = await HoldingsModel.find({});
   res.json(allHoldings);
})


app.get('/allPositions', async(req, res)=>{
   let allPositions = await PositionsModel.find({});
   res.json(allPositions);
})

app.post('/newOrder', async(req, res)=>{
 let newOrder = new OrdersModel({
    name : req.body.name, 
    qty: req.body.qty,
    price: req.body.price, 
    mode: req.body.mode,
 })
    newOrder.save();

    res.send('Order saved!');
});

app.listen(PORT, () => {
    console.log('server is started');
    mongoose.connect(URL);
    console.log('db connected!');
})


