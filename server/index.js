const message = require("./routers/messages");
const productcategory = require("./routers/productcategorys");
const products = require("./routers/products");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://mongo/mission5db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Coneected to the database..."))
  .catch((err) => {
    console.error("Connection error: ", err);
  });

app.use(express.json());

app.use("/api/products", products);
app.use("/api/message", message);
app.use("/api/productcategory", productcategory);

app.listen(port, () => {
  console.log("listening on port:", port);
});
