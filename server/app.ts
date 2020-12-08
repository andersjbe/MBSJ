import express from "express";
import mongoose from "mongoose";

import config from "./config";
import routes from './routes';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected!");
});

app.use('/api/reports', routes);

const PORT: number = 8080;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
