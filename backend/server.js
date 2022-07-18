const express = require("express");
const color = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
var cors = require("cors");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/ingredients", require("./routes/ingredientsRoutes"));
app.use("/api/recipes", require("./routes/recipesRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log("Server started on port:", port));
