require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const otpRoutes = require("./routes/otp");
const authRoutes = require("./routes/auth");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URI;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


// routes AFTER middleware
app.use("/api/auth", otpRoutes);

// const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(URL);
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.log("MongoDB connection error:", err);
  }
};

startServer();

//temporary
app.get("/", (req, res) => {
  res.send("Backend running");
});


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




