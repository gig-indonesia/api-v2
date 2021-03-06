require("dotenv").config();

const PORT = process.env.PORT;
const express = require("express");
const cors = require("cors");
const app = express();
const accounts = require("./api/accounts");
const hosts = require("./api/Hosts");
const artist = require("./api/Artists");
const appliedGigs = require("./api/appliedGigs");
const createGigs = require("./api/CreateGigs");
// const notification = require("./api/notification");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/products", products);
// app.use("/customers", customers);
app.use("/host", hosts);
app.use("/accounts", accounts);
app.use("/artist", artist);
app.use("/appliedGigs", appliedGigs);
app.use("/creategig", createGigs);
// app.use("/notification", notification);

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
