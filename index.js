const mongoose = require("mongoose")
const express = require("express");
const movieRouter = require("./routes/MovieRouter");

const port = 3000
const dbURI = 'mongodb://localhost:27017/crud_db';

const app = express()

mongoose.connect(dbURI)
    .then(() => {
        console.log('Successfully connected to MongoDB');
    }).catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });

app.use(express.json())
app.use("/api/v1/movies", movieRouter);

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})
