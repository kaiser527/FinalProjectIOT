import express from "express";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
import connecttion from "./config/connectDB";
import cors from "cors";
import updateDbSocket from "./Controllers/socketController";

require("dotenv").config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;
const server = require("http").createServer(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//test connection db
connecttion();

//config socket.io
const io = require("socket.io")(server);

//update temperature in database
updateDbSocket(io);

//init web routes
initWebRoutes(app);

server.listen(PORT, () => {
  console.log(">>> Backend is running on the port = " + PORT);
});
