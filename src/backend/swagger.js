const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./routes/routes.ts"];

const doc = {
  info: {
    title: "MultiSearch",
    description: "API de consulta.",
  },
  host: "localhost:3000/api",
  basePath: "/",
  schemes: ["http"],
};

swaggerAutogen(outputFile, endpointsFiles, doc);
