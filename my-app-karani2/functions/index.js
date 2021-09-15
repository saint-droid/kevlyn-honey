const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")("sk_test_51JD5IgEiLoIxMyKLBkRypsPQJ78eHTlwiG3VvW18wZXGYUx0IL7VqoCWB2f7rSMXKOEYPECCxwNJs8MUjL2OPmqx00e3yim4b3");

// API


// App config
const app = express();


// Middlewares
app.use(cors({origin: true}));
app.use(express.json());


// API routes
app.get("/", (request, response) => response.status(200).send( "Hello World" ));
app.post("/payments/create", async  (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
      });

      response.status(201).send({
        clientSecret: paymentIntent.client_secret,
      });
    });
    
// Listen command

exports.api = functions.https.onRequest(app);

// http://localhost:5001/karanie-commerce/us-central1/api

