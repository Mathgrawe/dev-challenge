import express from "express";
import bodyParser from "body-parser";
import searchRoutes from "../../backend/routes/searchRoutes";

const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
});

app.use(bodyParser.json());
app.use("/api", searchRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
