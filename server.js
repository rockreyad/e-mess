const express = require("express");
const cors = require("cors");
const session = require("express-session");
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
const v1MessRouter = require("./src/v1/routes/messRoutes");
const createRoles = require("./src/database/utils/configs/createRoles");
const { createSwagger } = require("./src/v1/swagger");

const app = express();

var corsOptions = {
  origin: ["http://localhost:3000"],
};

app.use(cors(corsOptions));
app.use(express.json());

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: true }));

app.set("trust proxy", 1); // trust first proxy
//  Cookie Session helps to stores the session data on the client within a cookie without requiring any database/ resources on the server side
app.use(
  session({
    secret: "cat",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true, //Ensures the browser only sends the cookie over HTTPS.
      httpOnly: true, // Ensures the cookie is sent only over HTTP(S), not client JavaScript, helping to protect against cross-site scripting attacks
      maxAge: 60000,
    },
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
app.use("/api/v1/mess", v1MessRouter);
createSwagger(app, PORT);

app.all("*", (req, res) => {
  res.status(404).send({
    status: "NOT FOUND",
    error: "Sorry can't find that!",
  });
});

const startApp = async () => {
  try {
    // Connection With DB
    await db.mongoose.connect(DB, {
      autoIndex: true,
    });

    success({
      message: `Successfully connected with the Database \n${DB} `,
      badge: true,
    });

    // Start Listening for the server on PORT
    app.listen(PORT, () =>
      success({ message: `Server started on PORT ${PORT}`, badge: true })
    );

    await createRoles(app);
  } catch (err) {
    error({
      message: `${err}`,
      badge: true,
    });
    // startApp();
  }
};

startApp();
