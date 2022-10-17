const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const { success, error } = require("consola");
const { logger } = require("./src/middlewares/logEvents");
const errorHandler = require("./src/middlewares/errorHandler");
const db = require("./src/database/models");
require("dotenv").config();
// Bring in the app constants
const { DB, PORT } = require("./src/database/utils/configs/dbConfig");

// All Custom Modules
const v1UserRouter = require("./src/v1/routes/userRoutes");
const v1Auth = require("./src/v1/routes/authRoutes");

const app = express();

var corsOptions = {
  origin: ["http://localhost:3000"],
};

app.use(cors(corsOptions));
app.use(express.json());

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: true }));

//  Cookie Session helps to stores the session data on the client within a cookie without requiring any database/ resources on the server side
app.use(
  cookieSession({
    name: "e-mess-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true, // cookie is sent over HTTP(S), not made available on client javascript
  })
);

// custom middleware logger
app.use(logger);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send({
    status: true,
    message: "Welcome to E-mess API Services",
  });
});

// *** ALL ROUTE PATH ***
app.use("/api/v1/user", v1UserRouter);
app.use("/api/v1/auth", v1Auth);

app.all("*", (req, res) => {
  res.status(404).send({
    status: "NOT FOUND",
    error: "404 Not Found",
  });
});

const startApp = async () => {
  try {
    // Connection With DB
    await db.mongoose.connect(DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    success({
      message: `Successfully connected with the Database \n${DB} `,
      badge: true,
    });

    // Start Listening for the server on PORT
    app.listen(PORT, () =>
      success({ message: `Server started on PORT ${PORT}`, badge: true })
    );
  } catch (err) {
    error({
      message: `Unable to connect with Database \n${err}`,
      badge: true,
    });
    startApp();
  }
};

startApp();
