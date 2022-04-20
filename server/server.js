const express = require('express')
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helper/createRouter')

MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology: true})
.then((client)=>
{
    const db = client.db('hotel');
    const bookingCollection = db.collection('bookings');
    const bookingsRouter = createRouter(bookingCollection);
    app.use('/api/bookings', bookingsRouter)

})
.catch(console.err);

app.listen(4000, function ()
{
    console.log('Listening');
})