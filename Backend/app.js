const express = require('express');
const bodyParser = require('body-parser');
const upload = require('express-fileupload');
const cors = require('cors');
const path = require('path');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload());
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Mount MVC Routes
app.use("/api/auth", require('./routes/authRoutes'));
app.use("/", require('./routes/adminRoutes'));
app.use("/", require('./routes/SliderRoutes'));
app.use("/", require('./routes/PlantRoutes'));
app.use("/", require('./routes/CountingRoutes'));
app.use("/", require('./routes/WorkingRoutes'));
app.use("/", require('./routes/ClientRoutes'));
app.use("/", require('./routes/MachineRoutes'));
app.use("/", require('./routes/AboutImgRoutes'));
app.use("/", require('./routes/AboutRoutes'));
app.use("/", require('./routes/FaqRoutes'));
app.use("/", require('./routes/ServiceImgRoutes'));
app.use("/", require('./routes/ServiceRoutes'));
app.use("/", require('./routes/GalleryRoutes'));
app.use("/", require('./routes/GalleryImgRoutes'));
app.use("/", require('./routes/ContactImgRoutes'));

// Custom Error Handling Middlewares
app.use(notFound);
app.use(errorHandler);

module.exports = app;
