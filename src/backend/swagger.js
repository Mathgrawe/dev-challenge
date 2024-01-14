const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./routes/searchRoutes.ts"];

const doc = {
  info: {
    title: "Meu Projeto Swagger",
    description: "Descrição do meu projeto Swagger.",
  },
  host: "localhost:3000",
  basePath: "/",
  schemes: ["http"],
};

swaggerAutogen(outputFile, endpointsFiles, doc);
