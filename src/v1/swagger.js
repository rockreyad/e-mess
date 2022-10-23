const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E-Mess API Documentation",
      version: "1.0.0",
    },
    tags : [
        {
            name : "Authentication",
            description : "User authentication"
        }
    ]
  },
  apis: ["./src/v1/routes/*.js"], // files containing annotations as above
};

// Docs in JSON format
const swaggerSpec = swaggerJSDoc(options);

const createSwagger = (app, port) => {
  // Route-Handler to visit our docs
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Make our docs in JSON format available
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.log(
    `Version 1 Docs are available on http://localhost:${port}/api/v1/docs`
  );
};

module.exports = { createSwagger };
